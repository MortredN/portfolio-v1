import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import {
  cameraNameAtom,
  cameraNameSwapAtom,
  firstTimeLoadingEndAtom,
  openMediaPlayerAtom
} from '../utils/recoil'
import { useEffect, useRef, useState } from 'react'
import Constants from '../utils/constants'

const MediaPlayer = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const [openMediaPlayer, setOpenMediaPlayer] = useRecoilState(openMediaPlayerAtom)
  const [showSongChangedMessage, setShowSongChangedMessage] = useState(false)
  const [firstTimeLoadingEnd] = useRecoilState(firstTimeLoadingEndAtom)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  const mediaPlayerRef = useRef()
  const hideMessageTimeout = useRef()

  const currentSongPath = Constants.SONG_LIST[currentSongIndex]
  const currentSongName = currentSongPath.substring(
    currentSongPath.indexOf('music/') + 6,
    currentSongPath.lastIndexOf('.mp3')
  )

  const togglePlayPause = () => {
    const audio = mediaPlayerRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying((value) => !value)
  }

  const playSong = (index) => {
    const audio = mediaPlayerRef.current
    setCurrentSongIndex(index)
    setShowSongChangedMessage(true)
    setIsPlaying(true)
    audio.src = Constants.SONG_LIST[index]
    audio.oncanplay = () => {
      audio.play()
    }
    clearTimeout(hideMessageTimeout.current)
    hideMessageTimeout.current = setTimeout(() => {
      setShowSongChangedMessage(false)
    }, 3000)
  }

  const playNextSong = () => {
    let nextIndex = (currentSongIndex + 1) % Constants.SONG_LIST.length
    playSong(nextIndex)
  }

  const playPreviousSong = () => {
    let previousIndex =
      (currentSongIndex - 1 + Constants.SONG_LIST.length) % Constants.SONG_LIST.length
    playSong(previousIndex)
  }

  useEffect(() => {
    if (firstTimeLoadingEnd) {
      const audio = mediaPlayerRef.current
      setTimeout(() => {
        audio.volume = 0.5
        audio.onended = () => {
          playNextSong()
        }
        togglePlayPause()
      }, 1000)
    }
  }, [firstTimeLoadingEnd])

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = mediaPlayerRef.current
      if (document.hidden) {
        if (isPlaying) {
          audio.pause()
        }
      } else {
        if (isPlaying) {
          audio.play()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying])

  return (
    <>
      <audio ref={mediaPlayerRef} src={Constants.SONG_LIST[currentSongIndex]} className="hidden" />
      <AnimatePresence>
        {cameraName === cameraNameSwap ? (
          <motion.nav
            key="mediaPlayerDisplay"
            className="fixed top-3 left-3 z-40"
            initial={{ translateX: `-100px`, rotate: 150 }}
            animate={{ translateX: 0, rotate: 0 }}
            exit={{ translateX: `-100px`, rotate: -150 }}
            transition={{ duration: 1, ease: 'anticipate' }}
            style={{ width: 60, height: 60 }}
          >
            <motion.button
              aria-label="open/close media player"
              onClick={() => setOpenMediaPlayer((value) => !value)}
              className="button-circle absolute top-0 left-0 rounded-full flex items-center justify-center"
              style={{ width: 60, height: 60, zIndex: 45 }}
            >
              <img src="./images/music.svg" className="w-8 h-8" alt="open/close player" />
            </motion.button>
            <AnimatePresence>
              {openMediaPlayer && (
                <>
                  <motion.button
                    aria-label="play/pause"
                    className="button-circle absolute top-0 left-0 rounded-full flex items-center justify-center"
                    initial={{ translateX: 0, rotate: 150 }}
                    animate={{ translateX: 76 * 1, rotate: 0 }}
                    exit={{ translateX: 0, rotate: -150 }}
                    transition={{ duration: 1, ease: 'anticipate' }}
                    style={{ width: 60, height: 60, zIndex: 44 }}
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? (
                      <img src="./images/pause.svg" className="w-8 h-8" alt="pause" />
                    ) : (
                      <img src="./images/play.svg" className="w-8 h-8" alt="play" />
                    )}
                  </motion.button>
                  <motion.button
                    aria-label="previous"
                    className="button-circle absolute top-0 left-0 rounded-full flex items-center justify-center"
                    initial={{ translateX: 0, rotate: 150 }}
                    animate={{ translateX: 76 * 2, rotate: 0 }}
                    exit={{ translateX: 0, rotate: -150 }}
                    transition={{ duration: 1, ease: 'anticipate' }}
                    style={{ width: 60, height: 60, zIndex: 43 }}
                    onClick={playPreviousSong}
                  >
                    <img src="./images/backward.svg" className="w-8 h-8" alt="previous" />
                  </motion.button>
                  <motion.button
                    aria-label="next"
                    className="button-circle absolute top-0 left-0 rounded-full flex items-center justify-center"
                    initial={{ translateX: 0, rotate: 150 }}
                    animate={{ translateX: 76 * 3, rotate: 0 }}
                    exit={{ translateX: 0, rotate: -150 }}
                    transition={{ duration: 1, ease: 'anticipate' }}
                    style={{ width: 60, height: 60, zIndex: 42 }}
                    onClick={playNextSong}
                  >
                    <img src="./images/forward.svg" className="w-8 h-8" alt="next" />
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </motion.nav>
        ) : null}
        {showSongChangedMessage && (
          <motion.div
            key="songMessageDisplay"
            initial={{ translateX: `-500px` }}
            animate={{ translateX: 0, rotate: 0 }}
            exit={{ translateX: `-500px` }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="fixed top-20 left-3 z-40 p-2 bg-coffee-3 rounded-lg text-white"
          >
            {currentSongName}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default MediaPlayer
