export interface ChatLogMessage {
  id: string;
  message: string;
  date: Date | string;
  currentUser?: boolean;
}

export interface ChatState {
  [key: string]: ChatLogMessage[];
}

// * ---------------------------------------------------------------------------------
// * Temporary mock user id:
export const MOCK_USER_ID = 'uID1' as const;
