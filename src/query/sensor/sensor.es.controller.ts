import { OffsetBody } from './models/offset-body';
import { SensorEsListener } from './sensor.es.listener';
import { AccessJwtAuthGuard } from '../../auth/access-jwt-auth.guard';
import { DomainExceptionFilter } from './errors/domain-exception.filter';
import { ApiTags, ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, UseGuards, UseFilters, Post, Body } from '@nestjs/common';

@ApiBearerAuth()
@UseGuards(AccessJwtAuthGuard)
@ApiTags('SensorES')
@Controller('SensorES')
@UseFilters(new DomainExceptionFilter())
export class SensorESController {
  constructor(
      private readonly eventStoreListener: SensorEsListener,
  ) {}

  @Post('subscription/open')
  @ApiOperation({ summary: 'Open subscription' })
  @ApiResponse({ status: 200, description: 'Subscription opened' })
  @ApiResponse({ status: 400, description: 'Failed to open subscription' })
  async openEventStoreSubscription() {
    await this.eventStoreListener.openSubscription();
  }

  @Post('subscription/close')
  @ApiOperation({ summary: 'Close subscription' })
  @ApiResponse({ status: 200, description: 'Subscription closed' })
  @ApiResponse({ status: 400, description: 'Failed to close subscription' })
  async closeEventStoreSubscription() {
    this.eventStoreListener.closeSubscription();
  }

  @Get('checkpoint')
  @ApiOperation({ summary: 'Retrieve checkpoint offset' })
  @ApiResponse({ status: 200, description: 'Checkpoint offset retrieved' })
  @ApiResponse({ status: 400, description: 'Failed to retrieve Checkpoint offset' })
  async retrieveEventStoreOffset() {
    return this.eventStoreListener.getOffset();
  }

  @Post('checkpoint')
  @ApiOperation({ summary: 'Set checkpoint offset' })
  @ApiResponse({ status: 200, description: 'Checkpoint offset set' })
  @ApiResponse({ status: 400, description: 'Failed to set Checkpoint offset' })
  async setEventStoreOffset(@Body() body: OffsetBody) {
    await this.eventStoreListener.setOffset(body.offset);
  }
}
