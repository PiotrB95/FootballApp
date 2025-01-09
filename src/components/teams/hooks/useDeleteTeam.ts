import { useEffect, useRef, useState } from 'react'
import { useDeleteTeamMutation } from '../../../queries/team/useDeleteTeamMutation.ts'
import { useGetGamesQuery } from '../../../queries/game/useGetGamesQuery.ts'

export const useDeleteTeam = () => {
  const { mutate, isPending } = useDeleteTeamMutation()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | ''>('')
  const [msg, setMsg] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { data: gamesData } = useGetGamesQuery()

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

  const handleDelete = (teamId: string) => {
    const findGame = gamesData?.filter(
      (game) => game.teamA === teamId || game.teamB === teamId,
    )
    if (findGame && findGame.length > 0) {
      console.log(findGame)
      setIsConfirmOpen(false)
      setMessageWithTimeout("You can't remove team which has in game")
    } else {
      setIsConfirmOpen(true)
      setItemToDelete(teamId)
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
