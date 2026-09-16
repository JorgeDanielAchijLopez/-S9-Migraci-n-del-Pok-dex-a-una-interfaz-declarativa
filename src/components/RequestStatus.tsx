import type { RequestStatus as RequestStatusType } from '../types/pokemon';

interface RequestStatusProps {
  status: RequestStatusType;
  message: string;
}

function RequestStatus({
  status,
  message,
}: RequestStatusProps) {
  return (
    <section aria-live="polite">
      <p>
        Estado: {status}
      </p>

      <p>
        {message}
      </p>
    </section>
  );
}

export default RequestStatus;