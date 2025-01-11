import { useDeletePlayerMutation } from '../../../queries/player/useDeletePlayerMutation.ts'
import { useEffect, useRef, useState } from 'react'
import { PlayerEntity } from '../../../types'

export const useDeletePlayer = () => {
  const { mutate, isPending } = useDeletePlayerMutation()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string>('')
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

  const handleDelete = (player: PlayerEntity) => {
    setItemToDelete('')
    if (player.teamId !== null) {
      setIsConfirmOpen(false)
      setMessageWithTimeout("You can't remove player which is in team")
    } else {
      setIsConfirmOpen(true)
      setItemToDelete(player.id)
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
