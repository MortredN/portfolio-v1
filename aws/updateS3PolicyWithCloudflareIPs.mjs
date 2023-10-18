import https from 'https'
import { S3 } from '@aws-sdk/client-s3'

const s3 = new S3()

export const handler = async () => {
  const ipData = await getCloudflareIPDatas()
  const ipList = [...ipData?.result?.ipv4_cidrs, ...ipData?.result?.ipv6_cidrs]

  const bucketNameApex = process.env.BUCKET_NAME_APEX
  const bucketNameSub = process.env.BUCKET_NAME_SUB

  try {
    for (const bucketName of [bucketNameApex, bucketNameSub]) {
      const bucketPolicy = {
        Version: '2012-10-17',
        Statement: [
          {
            Sid: 'PublicReadForGetBucketObjects',
            Effect: 'Allow',
            Principal: '*',
            Action: 's3:GetObject',
            Resource: `arn:aws:s3:::${bucketName}/*`,
            Condition: {
              IpAddress: {
                'aws:SourceIp': ipList
              }
            }
          }
        ]
      }
      await s3.putBucketPolicy({ Bucket: bucketName, Policy: JSON.stringify(bucketPolicy) })
    }
    return { statusCode: 200, body: 'S3 bucket policy updated successfully.' }
  } catch (error) {
    return { statusCode: 500, body: `Error updating S3 bucket policy: ${error.message}` }
  }
}

const getCloudflareIPDatas = async () => {
  return new Promise((resolve, reject) => {
    https.get('https://api.cloudflare.com/client/v4/ips', (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        try {
          let json = JSON.parse(data)
          resolve(json)
        } catch (error) {
          reject(error)
        }
      })

      res.on('error', (error) => {
        reject(error)
      })
    })
  })
}
