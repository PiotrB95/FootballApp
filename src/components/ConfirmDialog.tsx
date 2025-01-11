import styled from 'styled-components'

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:first-of-type {
    background-color: #f44336;
    color: white;
  }

  &:first-of-type:hover {
    background-color: #d32f2f;
  }

  &:last-of-type {
    background-color: #4caf50;
    color: white;
  }

  &:last-of-type:hover {
    background-color: #388e3c;
  }
`

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
    <ModalBackdrop>
      <ModalContainer>
        <p>{message}</p>
        {(successMessage && <p>{successMessage}</p>) || (
          <>
            <Button onClick={onConfirm}>Yes</Button>
            <Button onClick={onCancel}>No</Button>
          </>
        )}
      </ModalContainer>
    </ModalBackdrop>
  )
}
