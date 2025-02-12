import { useState } from 'react'
import { useUpdatePlayerTeamMutation } from '../../../queries/player/useUpdatePlayerTeamMutation.ts'

export const useDeletePlayerFromTeam = () => {
  const { mutate, isPending } = useUpdatePlayerTeamMutation()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string>('')

  const confirmDelete = () => {
    mutate({ playerId: itemToDelete, payload: { teamId: null } })
    setIsConfirmOpen(false)
    setItemToDelete('')
  }

  const cancelDelete = () => {
    setIsConfirmOpen(false)
    setItemToDelete('')
  }

  const handleDeletePlayerFromTeam = (playerId: string) => {
    setItemToDelete('')
    setIsConfirmOpen(true)
    setItemToDelete(playerId)
  }

  return {
    itemToDelete,
    isPending,
    isConfirmOpen,
    cancelDelete,
    confirmDelete,
    handleDeletePlayerFromTeam,
  }
}
