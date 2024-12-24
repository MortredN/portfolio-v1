const Work_2024_EKSDemo = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-4 lg:pb-8">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          EKS DEMO (COFFEE SHOP)
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 mx-4 lg:mx-16 lg:items-center">
        <div className="flex lg:text-lg">
          <div className="flex flex-col font-semibold gap-y-1">
            <span>Client:</span>
            <span>Year:</span>
            <span>Role:</span>
          </div>
          <div className="flex flex-col gap-y-1 ml-4 lg:ml-8">
            <span>George Brown College - T465</span>
            <span>2024</span>
            <span>Cloud Engineer (Personal Project)</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-8 lg:mt-0">
          <a
            className="group transition-colors duration-300 ml-auto lg:ml-24 hover:text-coffee-6 text-base lg:text-2xl w-fit"
            href="https://github.com/MortredN/eks-demo-coffeeshop"
            target="_blank"
          >
            Visit GitHub repo ↗
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
          </a>
          <a
            className="group transition-colors duration-300 ml-auto lg:ml-24 hover:text-coffee-6 text-base lg:text-2xl w-fit"
            href="https://mortredn.notion.site/Step-by-step-AWS-Console-eksctl-12364caecee580a99a85d8007e9dbb52"
            target="_blank"
          >
            Visit step-by-step guide ↗
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
          </a>
        </div>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        <b>George Brown College - Cloud Computing Final Project</b>
        For this certificate's final project, I was asked to deploy containerized applications using
        Docker and Kubernetes to AWS EKS (Elastic Kubernetes Service). I developed a simple
        microservices project (from the GitHub repo) with a frontend React app and two REST API
        Express.js apps. Then, I deployed them to AWS EKS, exposed them using Application Load
        Balancer and CloudFront, implemented monitoring with CloudWatch, and CI/CD with
        CodePipeline. As the final touch, I also implemented a simple Istio service mesh to test out
        canary deployment, mutual authentication, and observability. The full step-by-step guide is
        available as a Notion document above.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="/images/works/2024/eks-demo/desktop-1.png" />
        </div>
        <div className="flex">
          <img src="/images/works/2024/eks-demo/desktop-2.png" />
        </div>
        <div className="flex">
          <img src="/images/works/2024/eks-demo/desktop-3.png" />
        </div>
        <div className="flex">
          <img src="/images/works/2024/eks-demo/diagram-draft.png" />
        </div>
      </div>
    </div>
  )
}
export default Work_2024_EKSDemo
