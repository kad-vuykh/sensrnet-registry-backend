import { IQuery } from '@nestjs/cqrs';

export class RetrieveSensorsQuery implements IQuery {
    constructor(
        public readonly requestOrganizationId?: string,
        public readonly bottomLeftLongitude?: number,
        public readonly bottomLeftLatitude?: number,
        public readonly upperRightLongitude?: number,
        public readonly upperRightLatitude?: number,
        public readonly pageIndex?: number,
        public readonly organizationId?: string,
    ) {}
}
