import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FlowersService } from "./flowers.service";
import { ParseIntPipe } from "src/conception/pipe";
import { AuthGuard } from "src/conception/guard";
import { LoggerInterceptor } from "src/conception/interceptor";

@Controller("flowers")
@UseInterceptors(LoggerInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query("pageNumber", ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
}
