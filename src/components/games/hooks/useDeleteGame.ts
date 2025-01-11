import { useEffect, useRef, useState } from 'react'
import { useDeleteGameMutation } from '../../../queries/game/useDeleteGameMutation.ts'

export const useDeleteGame = () => {
  const { mutate, isPending } = useDeleteGameMutation()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | ''>('')
  const [msg, setMsg] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearMessageTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const setMessageWithTimeout = (message: string, duration: number = 5000) => {
    clearMessageTimeout()
    setMsg(message)

    timeoutRef.current = setTimeout(() => {
      setMsg('')
      timeoutRef.current = null
    }, duration)
  }

  const confirmDelete = () => {
    mutate(itemToDelete)
    setIsConfirmOpen(false)
    setItemToDelete('')
  }

  const cancelDelete = () => {
    setIsConfirmOpen(false)
    setItemToDelete('')
  }

  const handleDelete = (gameId: string) => {
    setItemToDelete('')
    if (gameId === null) {
      setIsConfirmOpen(false)
      setMessageWithTimeout("You can't remove team which has in game")
    } else {
      setIsConfirmOpen(true)
      setItemToDelete(gameId)
    }
  }

  useEffect(() => {
    return () => {
      clearMessageTimeout()
    }
  }, [])

  return {
    msg,
    isPending,
    isConfirmOpen,
    cancelDelete,
    confirmDelete,
    handleDelete,
    itemToDelete,
  }
}
