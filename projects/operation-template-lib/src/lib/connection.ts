export enum CloudType {
  AWS = 'AWS',
  AZURE = 'AZURE',
  GCP = 'GCP'
}
export class Connection{
	constructor(
	    public id?: string,
	    public vpcId?: string,
	    public identifier?: string,
	    public customerIdentifier: string,
	    public cloudType: CloudType,
	    public cidrBlocks: any[],
	    public ownerId: string,
	    public state?: string,
	    public region?: string,
	    public availabilityZone: string,
	    public peers: any[],
	    public maxBandwidth: number		
	){}
}