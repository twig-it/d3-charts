import { Axis } from 'd3-axis';
import {
  scaleBand,
  ScaleBand,
  scaleLinear,
  ScaleLinear,
  scaleLog,
  ScaleLogarithmic,
  scaleTime,
  ScaleTime
} from 'd3-scale';
import { AxisScaleType } from '../cartesian';
import { ScaleType } from '../cartesian-object';

export class CartesianAxisScale {
  public getScale(scaleType: AxisScaleType, rangeMin: number, rangeMax: number): ScaleType {
    switch (scaleType) {
      case AxisScaleType.Time:
        return this.getTimeScale(rangeMin, rangeMax);

      case AxisScaleType.Logarithmic:
        return this.getLogarithmicScale(rangeMin, rangeMax);

      case AxisScaleType.Category:
        return this.getOrdinalScale(rangeMin, rangeMax);

      case AxisScaleType.Linear:
        return this.getLinearScale(rangeMin, rangeMax);

      default:
        throw new Error('Invalid Scale');
    }
  }

  public getTimeScale(rangeMin: number, rangeMax: number): ScaleTime<number, number> {
    const endTime = new Date();
    // TODO: setting a default time axis range of 15 hrs. Change this with UX feedback.
    const startTime = new Date(endTime.getTime() - 15 * 60 * 60 * 1000);

    return scaleTime()
      .domain([startTime, endTime])
      .range([rangeMin, rangeMax])
      .nice();
  }

  public getLinearScale(rangeMin: number, rangeMax: number): ScaleLinear<number, number> {
    return scaleLinear()
      .range([rangeMin, rangeMax])
      .nice();
  }

  public getLogarithmicScale(rangeMin: number, rangeMax: number): ScaleLogarithmic<number, number> {
    return scaleLog()
      .range([rangeMin, rangeMax])
      .nice();
  }

  public getOrdinalScale(rangeMin: number, rangeMax: number): ScaleBand<string> {
    return scaleBand()
      .range([rangeMin, rangeMax])
      .paddingInner(0.2)
      .paddingOuter(0.1)
      .align(1);
  }

  public setDomain(
    axisScaleType: AxisScaleType,
    axis: Axis<number | Date | string>,
    domain: number[] | string[]
  ): ScaleType {
    switch (axisScaleType) {
      case AxisScaleType.Time:
        return (axis.scale() as ScaleTime<number, number>).domain(domain as number[]);

      case AxisScaleType.Logarithmic:
        const logDomain = domain as number[];
        if (logDomain[0] === 0) {
          logDomain[0] = 1;
        }
        const logScale = axis.scale() as ScaleLogarithmic<number, number>;
        logScale.tickFormat(5, ',d');

        return logScale.domain(logDomain);

      case AxisScaleType.Category:
        return (axis.scale() as ScaleBand<string>).domain(domain as string[]);

      case AxisScaleType.Linear:
        return (axis.scale() as ScaleLinear<number, number>).domain(domain as number[]);

      default:
        throw new Error('Invalid Scale');
    }
  }
}
