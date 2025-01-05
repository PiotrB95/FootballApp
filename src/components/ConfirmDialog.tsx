interface ConfirmDialogProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  message: string
  successMessage?: string
}

export const ConfirmDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  successMessage,
}: ConfirmDialogProps) => {
  if (!isOpen) return null

  return (
    <div className='confirm-dialog'>
      <p>{message}</p>
      {(successMessage && <p>{successMessage}</p>) || (
        <>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </>
      )}
    </div>
  )
}
