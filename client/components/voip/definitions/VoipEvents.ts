import { ICallerInfo } from '../ICallEventDelegate';

export type VoipEvents = {
	registered: undefined;
	registrationerror: unknown;
	unregistered: undefined;
	unregistrationerror: unknown;
	connected: undefined;
	connectionerror: unknown;
	callestablished: undefined;
	incomingcall: ICallerInfo;
	callterminated: undefined;

	stateChanged: undefined;
};
