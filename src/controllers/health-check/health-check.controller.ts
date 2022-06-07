import { Controller, Get, Logger } from '@nestjs/common';
import {
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { HealthCheckService } from './health-check.service';
import { HealthCheckRes } from '../../shared/types/global/global-data';

@ApiTags('Health Check')
@Controller('/health-check')
export class HealthCheckController {
  private readonly logger = new Logger(HealthCheckController.name);

  constructor(private readonly healthCheckService: HealthCheckService) {}

  @ApiOperation({ summary: 'Health check without authorization' })
  @ApiResponse({ status: 200, description: 'Return status of the api health.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  healthCheck(): HealthCheckRes {
    this.logger.log('health check.....');
    return {
      response: 'outdefine api is ok',
    };
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Health check with authorization' })
  @ApiResponse({ status: 200, description: 'Return status of the api health.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('/authorized')
  getHello(): string {
    return this.healthCheckService.getHello();
  }
}
