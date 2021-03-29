/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  var t = {
      397: function (t, n, e) {
        !(function (t, n, e, r, i, o, a, u, s) {
          "use strict";
          var c, l, f;
          (t.AxisScaleType = void 0),
            ((f = t.AxisScaleType || (t.AxisScaleType = {})).Linear = "linear"),
            (f.Logarithmic = "logarithmic"),
            (f.Time = "datetime"),
            (f.Category = "category"),
            (t.LegendAlign = void 0),
            ((l = t.LegendAlign || (t.LegendAlign = {})).Right = "right"),
            (l.Bottom = "bottom"),
            (t.VisualizationType = void 0),
            ((c = t.VisualizationType || (t.VisualizationType = {})).Column =
              "column"),
            (c.Area = "area"),
            (c.Line = "line"),
            (c.Points = "points");
          class h {
            constructor(t, e) {
              var r;
              (this.chartContainer = t),
                (this.options = e),
                (this.destroyed = !1);
              const i = n.select(this.chartContainer);
              null === (r = i.datum()) || void 0 === r || r.destroy(),
                i.datum(this);
            }
            throwIfDestroyed() {
              if (this.destroyed)
                throw new Error("This CartesianObject has been destroyed");
            }
            destroy() {
              n.select(this.chartContainer).selectAll("svg").remove(),
                (this.destroyed = !0);
            }
          }
          var p = new Date(),
            d = new Date();
          function v(t, n, e, r) {
            function i(n) {
              return (
                t((n = 0 === arguments.length ? new Date() : new Date(+n))), n
              );
            }
            return (
              (i.floor = function (n) {
                return t((n = new Date(+n))), n;
              }),
              (i.ceil = function (e) {
                return t((e = new Date(e - 1))), n(e, 1), t(e), e;
              }),
              (i.round = function (t) {
                var n = i(t),
                  e = i.ceil(t);
                return t - n < e - t ? n : e;
              }),
              (i.offset = function (t, e) {
                return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
              }),
              (i.range = function (e, r, o) {
                var a,
                  u = [];
                if (
                  ((e = i.ceil(e)),
                  (o = null == o ? 1 : Math.floor(o)),
                  !(e < r && o > 0))
                )
                  return u;
                do {
                  u.push((a = new Date(+e))), n(e, o), t(e);
                } while (a < e && e < r);
                return u;
              }),
              (i.filter = function (e) {
                return v(
                  function (n) {
                    if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
                  },
                  function (t, r) {
                    if (t >= t)
                      if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                      else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
                  }
                );
              }),
              e &&
                ((i.count = function (n, r) {
                  return (
                    p.setTime(+n),
                    d.setTime(+r),
                    t(p),
                    t(d),
                    Math.floor(e(p, d))
                  );
                }),
                (i.every = function (t) {
                  return (
                    (t = Math.floor(t)),
                    isFinite(t) && t > 0
                      ? t > 1
                        ? i.filter(
                            r
                              ? function (n) {
                                  return r(n) % t == 0;
                                }
                              : function (n) {
                                  return i.count(0, n) % t == 0;
                                }
                          )
                        : i
                      : null
                  );
                })),
              i
            );
          }
          var g = 6e4,
            y = 36e5,
            _ = v(
              function (t) {
                t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
              },
              function (t, n) {
                t.setTime(+t + n * g);
              },
              function (t, n) {
                return (n - t) / g;
              },
              function (t) {
                return t.getMinutes();
              }
            ),
            x = v(
              function (t) {
                t.setTime(
                  t -
                    t.getMilliseconds() -
                    1e3 * t.getSeconds() -
                    t.getMinutes() * g
                );
              },
              function (t, n) {
                t.setTime(+t + n * y);
              },
              function (t, n) {
                return (n - t) / y;
              },
              function (t) {
                return t.getHours();
              }
            ),
            m = v(
              function (t) {
                t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setDate(t.getDate() + n);
              },
              function (t, n) {
                return (
                  (n -
                    t -
                    (n.getTimezoneOffset() - t.getTimezoneOffset()) * g) /
                  864e5
                );
              },
              function (t) {
                return t.getDate() - 1;
              }
            );
          function b(t) {
            return v(
              function (n) {
                n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
                  n.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setDate(t.getDate() + 7 * n);
              },
              function (t, n) {
                return (
                  (n -
                    t -
                    (n.getTimezoneOffset() - t.getTimezoneOffset()) * g) /
                  6048e5
                );
              }
            );
          }
          var w = b(0);
          b(1), b(2), b(3), b(4), b(5), b(6);
          var A,
            S = v(
              function (t) {
                t.setDate(1), t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setMonth(t.getMonth() + n);
              },
              function (t, n) {
                return (
                  n.getMonth() -
                  t.getMonth() +
                  12 * (n.getFullYear() - t.getFullYear())
                );
              },
              function (t) {
                return t.getMonth();
              }
            ),
            M = v(
              function (t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setFullYear(t.getFullYear() + n);
              },
              function (t, n) {
                return n.getFullYear() - t.getFullYear();
              },
              function (t) {
                return t.getFullYear();
              }
            );
          M.every = function (t) {
            return isFinite((t = Math.floor(t))) && t > 0
              ? v(
                  function (n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                      n.setMonth(0, 1),
                      n.setHours(0, 0, 0, 0);
                  },
                  function (n, e) {
                    n.setFullYear(n.getFullYear() + e * t);
                  }
                )
              : null;
          };
          class T {
            constructor(t) {
              this.cartesianAxisScale = t;
            }
            drawAxis(t) {
              this.buildAxis(t), this.styleAxis(t);
            }
            drawAxisTitle(t, n) {
              return t
                .append("svg:text")
                .style("fill", n.color)
                .style("font-size", "14px")
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .classed("axis-title", !0)
                .text(n.title);
            }
            buildAxisData(t, n) {
              return { axis: t, scaleType: n };
            }
            hideAxisPath(t) {
              t.select("path").style("stroke-width", 0);
            }
            styleAxisPath(t, n) {
              t.selectAll("path.domain")
                .attr("stroke", n.color)
                .attr("stroke-width", "1");
            }
            styleTicks(t, n) {
              const e = t.selectAll(".tick");
              return (
                e
                  .select("text")
                  .style("color", n.color)
                  .style("fill", n.color)
                  .style("font-size", "11px"),
                n.grid.visible
                  ? e
                      .select("line")
                      .attr("stroke", n.grid.color)
                      .attr("stroke-width", "1")
                  : e.select("line").style("stroke-width", 0),
                e
              );
            }
            styleTickText(t, n) {
              return t
                .selectAll(".tick text")
                .style("color", n.color)
                .style("fill", n.color)
                .style("font-size", "11px");
            }
            styleTickLine(t, n) {
              t.selectAll(".tick line")
                .attr("stroke", n.color)
                .attr("stroke-width", "1");
            }
            hideTickLine(t) {
              t.selectAll(".tick line").style("stroke-width", 0);
            }
            hideTickText(t) {
              t.selectAll(".tick text").style("stroke-width", 0);
            }
            setScaleFormatting(n, e) {
              if (n.axisOption.scale === t.AxisScaleType.Time) {
                const t = r.timeFormat("%M:%S"),
                  n = r.timeFormat("%I:%M"),
                  i = r.timeFormat("%I %p"),
                  o = r.timeFormat("%a %d"),
                  a = r.timeFormat("%b %d"),
                  u = r.timeFormat("%B"),
                  s = r.timeFormat("%Y"),
                  c = (e) =>
                    _(e) < e
                      ? t(e)
                      : x(e) < e
                      ? n(e)
                      : m(e) < e
                      ? i(e)
                      : S(e) < e
                      ? w(e) < e
                        ? o(e)
                        : a(e)
                      : M(e) < e
                      ? u(e)
                      : s(e);
                e.tickFormat(c);
              }
            }
            static getAxisSectionClass(t, n) {
              return t
                ? n
                  ? ".axis-top-section"
                  : ".axis-bottom-section"
                : n
                ? ".axis-right-section"
                : ".axis-left-section";
            }
          }
          class O {
            getScale(n, e, r) {
              switch (n) {
                case t.AxisScaleType.Time:
                  return this.getTimeScale(e, r);
                case t.AxisScaleType.Logarithmic:
                  return this.getLogarithmicScale(e, r);
                case t.AxisScaleType.Category:
                  return this.getOrdinalScale(e, r);
                case t.AxisScaleType.Linear:
                  return this.getLinearScale(e, r);
                default:
                  throw new Error("Invalid Scale");
              }
            }
            getTimeScale(t, n) {
              const e = new Date(),
                r = new Date(e.getTime() - 54e6);
              return i.scaleTime().domain([r, e]).range([t, n]).nice();
            }
            getLinearScale(t, n) {
              return i.scaleLinear().range([t, n]).nice();
            }
            getLogarithmicScale(t, n) {
              return i.scaleLog().range([t, n]).nice();
            }
            getOrdinalScale(t, n) {
              return i
                .scaleBand()
                .range([t, n])
                .paddingInner(0.2)
                .paddingOuter(0.1)
                .align(1);
            }
            setDomain(n, e, r) {
              switch (n) {
                case t.AxisScaleType.Time:
                  return e.scale().domain(r);
                case t.AxisScaleType.Logarithmic:
                  const n = r;
                  0 === n[0] && (n[0] = 1);
                  const i = e.scale();
                  return i.tickFormat(5, ",d"), i.domain(n);
                case t.AxisScaleType.Category:
                case t.AxisScaleType.Linear:
                  return e.scale().domain(r);
                default:
                  throw new Error("Invalid Scale");
              }
            }
          }
          class k extends T {
            constructor(t) {
              super(t);
            }
            buildAxis(t) {
              t.scale ||
                (t.scale = this.cartesianAxisScale.getScale(
                  t.axisOption.scale,
                  0,
                  t.seriesWidth
                ));
              const n = o.axisBottom(t.scale);
              return (
                n.tickSize(-t.seriesHeight),
                n.tickSizeInner(10),
                n.tickSizeOuter(0),
                n.tickPadding(10),
                this.setScaleFormatting(t, n),
                t.axisSelection.datum(
                  this.buildAxisData(n, t.axisOption.scale)
                ),
                t.axisSelection.call(n)
              );
            }
            styleAxis(t) {
              this.styleAxisPath(t.axisSelection, t.axisOption),
                this.styleTickLine(t.axisSelection, t.axisOption),
                this.styleTickText(t.axisSelection, t.axisOption),
                this.drawAxisTitle(t.axisSelection, t.axisOption);
            }
            drawAxisTitle(t, n) {
              const e = Number(t.attr("width"));
              return super
                .drawAxisTitle(t, n)
                .attr("transform", `translate(${e / 2}, 40)`);
            }
          }
          class N extends T {
            constructor(t) {
              super(t);
            }
            buildAxis(t) {
              t.scale ||
                (t.scale = this.cartesianAxisScale.getScale(
                  t.axisOption.scale,
                  0,
                  t.seriesWidth
                ));
              const n = o.axisTop(t.scale);
              return (
                n.tickSize(-1 * t.seriesHeight),
                n.tickSizeInner(10),
                n.tickSizeOuter(0),
                n.tickPadding(10),
                this.setScaleFormatting(t, n),
                t.axisSelection.datum(
                  this.buildAxisData(n, t.axisOption.scale)
                ),
                t.axisSelection.call(n)
              );
            }
            styleAxis(t) {
              this.styleAxisPath(t.axisSelection, t.axisOption),
                this.styleTickLine(t.axisSelection, t.axisOption),
                this.styleTickText(t.axisSelection, t.axisOption),
                this.drawAxisTitle(t.axisSelection, t.axisOption);
            }
            drawAxisTitle(t, n) {
              const e = Number(t.attr("width"));
              return super
                .drawAxisTitle(t, n)
                .attr("transform", `translate(${e / 2}, -50)`);
            }
          }
          class E extends T {
            constructor(t) {
              super(t);
            }
            buildAxis(t) {
              t.scale ||
                (t.scale = this.cartesianAxisScale.getScale(
                  t.axisOption.scale,
                  t.seriesHeight,
                  0
                ));
              const n = o.axisLeft(t.scale);
              return (
                n.ticks(5),
                n.tickSize(-1 * t.seriesWidth),
                n.tickSizeOuter(0),
                n.tickPadding(10),
                this.setScaleFormatting(t, n),
                t.axisSelection.datum(
                  this.buildAxisData(n, t.axisOption.scale)
                ),
                t.axisSelection.call(n)
              );
            }
            styleAxis(t) {
              this.hideAxisPath(t.axisSelection);
              const n = this.styleTicks(t.axisSelection, t.axisOption);
              n.select("line").attr("transform", "translate(60,0)"),
                n.select("text").attr("transform", "translate(60,0)"),
                this.drawAxisTitle(t.axisSelection, t.axisOption);
            }
            drawAxisTitle(t, n) {
              const e = Number(t.attr("height"));
              return super
                .drawAxisTitle(t, n)
                .attr("transform", `translate(0,${e / 2})rotate(-90)`);
            }
          }
          class D extends T {
            constructor(t) {
              super(t);
            }
            buildAxis(t) {
              t.scale ||
                (t.scale = this.cartesianAxisScale.getScale(
                  t.axisOption.scale,
                  t.seriesHeight,
                  0
                ));
              const n = o.axisRight(t.scale);
              return (
                n.ticks(5),
                n.tickSize(-1 * t.seriesWidth),
                n.tickSizeOuter(0),
                n.tickPadding(10),
                this.setScaleFormatting(t, n),
                t.axisSelection.datum(
                  this.buildAxisData(n, t.axisOption.scale)
                ),
                t.axisSelection.call(n)
              );
            }
            styleAxis(t) {
              this.hideAxisPath(t.axisSelection),
                this.styleTicks(t.axisSelection, t.axisOption),
                this.drawAxisTitle(t.axisSelection, t.axisOption);
            }
            drawAxisTitle(t, n) {
              const e = Number(t.attr("height"));
              return super
                .drawAxisTitle(t, n)
                .attr("transform", `translate(50,${e / 2})rotate(-90)`);
            }
          }
          class I {
            constructor() {
              this.cartesianAxisScale = new O();
            }
            drawAxes(t, n) {
              const e = t.select(".plot-section");
              this.drawXAxes(e, n.xAxis), this.drawYAxes(e, n.yAxis);
            }
            drawXAxes(t, n) {
              this.drawAxis(t, n, !0);
            }
            updateAxis(t, n, e, r, i) {
              const o = this.getAxisData(t, n, e, r);
              if (!o) return;
              const a = t.select(".series-section"),
                u = Number(a.attr("width")),
                s = Number(a.attr("height")),
                c = this.setDomain(o, i),
                l = t
                  .select(this.getAxisSectionClass(e, n.opposite))
                  .selectAll(`.axis-${r}`);
              this.getRenderer(e, n.opposite).drawAxis({
                axisSelection: l,
                axisOption: n,
                seriesWidth: u,
                seriesHeight: s,
                scale: c,
              });
            }
            getAxisData(t, n, e, r) {
              return t
                .select(this.getAxisSectionClass(e, n.opposite))
                .selectAll(`.axis-${r}`)
                .datum();
            }
            setDomain(t, n) {
              return this.cartesianAxisScale.setDomain(t.scaleType, t.axis, n);
            }
            drawYAxes(t, n) {
              this.drawAxis(t, n, !1);
            }
            drawAxis(t, n, e) {
              const r = t.select(".series-section"),
                i = Number(r.attr("width")),
                o = Number(r.attr("height"));
              n.forEach((n, r) => {
                const a = t
                  .selectAll(this.getAxisSectionClass(e, n.opposite))
                  .select(`.axis-${r}`);
                this.getRenderer(e, n.opposite).drawAxis({
                  axisSelection: a,
                  axisOption: n,
                  seriesWidth: i,
                  seriesHeight: o,
                });
              });
            }
            getRenderer(t, n) {
              return t
                ? n
                  ? new N(this.cartesianAxisScale)
                  : new k(this.cartesianAxisScale)
                : n
                ? new D(this.cartesianAxisScale)
                : new E(this.cartesianAxisScale);
            }
            getAxisSectionClass(t, n) {
              return T.getAxisSectionClass(t, n);
            }
          }
          !(function (t) {
            (t.Plot = "plot-section"),
              (t.Legend = "legend-section"),
              (t.Series = "series-section"),
              (t.AxisTop = "axis-top-section"),
              (t.AxisBottom = "axis-bottom-section"),
              (t.AxisLeft = "axis-left-section"),
              (t.AxisRight = "axis-right-section");
          })(A || (A = {}));
          class j {
            drawLayout(n, e) {
              const r = Number(n.attr("width")),
                i = Number(n.attr("height")),
                o = e.legend;
              o.visible
                ? (o.align === t.LegendAlign.Right
                    ? this.buildHorizontalLayout(n, r, i)
                    : this.buildVerticalLayout(n, r, i),
                  this.buildAxesSections(n, e),
                  this.buildSeriesSection(n))
                : this.buildPlotOnlyLayout(n, r, i);
            }
            buildPlotOnlyLayout(t, n, e) {
              this.addSection(
                t,
                this.getPlotOnlyDimension(n, e),
                "plot-section"
              );
            }
            buildHorizontalLayout(t, n, e) {
              this.addSection(
                t,
                this.getHorizontalPlotDimension(n, e),
                "plot-section"
              ),
                this.addSection(
                  t,
                  this.getHorizontalLegendDimension(n, e),
                  "legend-section"
                );
            }
            buildVerticalLayout(t, n, e) {
              this.addSection(
                t,
                this.getVerticalPlotDimension(n, e),
                "plot-section"
              ),
                this.addSection(
                  t,
                  this.getVerticalLegendDimension(n, e),
                  "legend-section"
                );
            }
            buildAxesSections(t, n) {
              const e = t.select(".plot-section");
              this.buildXAxesSections(e, n), this.buildYAxesSections(e, n);
            }
            buildXAxesSections(t, n) {
              const e =
                  Number(t.attr("width")) -
                  n.yAxis.length * j.YAXIS_SECTION_WIDTH,
                r =
                  n.yAxis.filter((t) => !t.opposite).length *
                  j.YAXIS_SECTION_WIDTH;
              this.buildBottomXAxesSections(t, n.xAxis, e, r),
                this.buildTopXAxesSections(t, n.xAxis, e, r);
            }
            buildBottomXAxesSections(t, n, e, r) {
              const i = Number(t.attr("height")),
                o = n.filter((t) => !t.opposite),
                a = this.getXAxisSectionDimension(e, i, o.length, r, !0),
                u = this.addSection(t, a, "axis-bottom-section");
              let s = 0;
              n.forEach((t, n) => {
                if (!t.opposite) {
                  const t = this.getXAxisDimension(e, s++);
                  this.addSection(u, t, `axis-${n}`);
                }
              });
            }
            buildTopXAxesSections(t, n, e, r) {
              const i = Number(t.attr("height")),
                o = n.filter((t) => t.opposite),
                a = this.getXAxisSectionDimension(e, i, o.length, r, !1),
                u = this.addSection(t, a, "axis-top-section");
              let s = 0;
              n.forEach((t, n) => {
                if (t.opposite) {
                  const t = this.getXAxisDimension(e, s++);
                  this.addSection(u, t, `axis-${n}`);
                }
              });
            }
            buildYAxesSections(t, n) {
              const e =
                  Number(t.attr("height")) -
                  n.xAxis.length * j.XAXIS_SECTION_HEIGHT,
                r =
                  n.xAxis.filter((t) => t.opposite).length *
                  j.XAXIS_SECTION_HEIGHT;
              this.buildLeftYAxesSections(t, n.yAxis, e, r),
                this.buildRightYAxesSections(t, n.yAxis, e, r);
            }
            buildLeftYAxesSections(t, n, e, r) {
              const i = Number(t.attr("width")),
                o = n.filter((t) => !t.opposite),
                a = this.getYAxisSectionDimension(i, e, o.length, r, !0),
                u = this.addSection(t, a, "axis-left-section");
              let s = 0;
              n.forEach((t, n) => {
                if (!t.opposite) {
                  const t = this.getYAxisDimension(e, s++);
                  this.addSection(u, t, `axis-${n}`);
                }
              });
            }
            buildRightYAxesSections(t, n, e, r) {
              const i = Number(t.attr("width")),
                o = n.filter((t) => t.opposite),
                a = this.getYAxisSectionDimension(i, e, o.length, r, !1),
                u = this.addSection(t, a, "axis-right-section");
              let s = 0;
              n.forEach((t, n) => {
                if (t.opposite) {
                  const t = this.getYAxisDimension(e, s++);
                  this.addSection(u, t, `axis-${n}`);
                }
              });
            }
            buildSeriesSection(t) {
              const n = t.select(".plot-section"),
                e = n.select(".axis-top-section"),
                r = n.select(".axis-left-section"),
                i = Number(r.attr("width")),
                o = Number(e.attr("height")),
                a = Number(e.attr("width")),
                u = Number(r.attr("height")),
                s = this.getSeriesSectionDimension(a, u, i, o);
              this.addSection(n, s, "series-section");
            }
            addSection(t, n, e) {
              const r = t
                .append("svg:g")
                .attr("width", n.width)
                .attr("height", n.height)
                .classed(e, !0);
              return (
                r.attr(
                  "transform",
                  `translate(${n.position.x}, ${n.position.y})`
                ),
                r
              );
            }
            getPlotOnlyDimension(t, n) {
              return { width: t, height: n, position: { x: 0, y: 0 } };
            }
            getHorizontalPlotDimension(t, n) {
              return {
                width: t - j.RIGHT_ALIGNED_WIDTH,
                height: n,
                position: { x: 0, y: 0 },
              };
            }
            getVerticalPlotDimension(t, n) {
              return {
                width: t,
                height: n - j.BOTTOM_ALIGNED_HEIGHT,
                position: { x: 0, y: 0 },
              };
            }
            getHorizontalLegendDimension(t, n) {
              const e = j.RIGHT_ALIGNED_WIDTH;
              return { width: e, height: n, position: { x: t - e, y: 0 } };
            }
            getVerticalLegendDimension(t, n) {
              const e = j.BOTTOM_ALIGNED_HEIGHT;
              return { width: t, height: e, position: { x: 0, y: n - e } };
            }
            getYAxisSectionDimension(t, n, e, r, i = !1) {
              const o = e * j.YAXIS_SECTION_WIDTH;
              return {
                width: o,
                height: n,
                position: { x: i ? 0 : t - o, y: r },
              };
            }
            getXAxisSectionDimension(t, n, e, r, i = !1) {
              const o = e * j.XAXIS_SECTION_HEIGHT;
              return {
                width: t,
                height: o,
                position: { x: r, y: i ? n - o : o },
              };
            }
            getYAxisDimension(t, n) {
              const e = j.YAXIS_SECTION_WIDTH;
              return { width: e, height: t, position: { x: n * e, y: 0 } };
            }
            getXAxisDimension(t, n) {
              const e = j.XAXIS_SECTION_HEIGHT;
              return { width: t, height: e, position: { x: 0, y: n * e } };
            }
            getSeriesSectionDimension(t, n, e, r) {
              return { width: t, height: n, position: { x: e, y: r } };
            }
          }
          (j.RIGHT_ALIGNED_WIDTH = 180),
            (j.BOTTOM_ALIGNED_HEIGHT = 100),
            (j.YAXIS_SECTION_WIDTH = 70),
            (j.XAXIS_SECTION_HEIGHT = 70);
          class C {
            drawLegends(n, e) {
              const r = n.select(".legend-section"),
                i = e.series.map((t, e) => {
                  const r = n.select(`.${t.name.replace(/\s/g, "")}-${e}`);
                  return { name: t.name, color: t.color, selection: r };
                });
              e.legend.align === t.LegendAlign.Bottom
                ? this.drawBottomAlignedLegends(r, e.legend, i)
                : this.drawRightAlignedLegends(r, e.legend, i);
            }
            drawRightAlignedLegends(t, n, e) {
              const r = t
                .append("svg:g")
                .attr("transform", "translate(30, 100)");
              this.drawLegendTitle(r, n);
              const i = this.drawRightAlignedLegendItemGroups(r, n.title, e);
              this.drawLegendItems(i);
            }
            drawBottomAlignedLegends(t, n, e) {
              const r = t.append("svg:g").attr("transform", "translate(70, 0)");
              this.drawLegendTitle(r, n);
              const i = this.drawBottomAlignedLegendItemGroups(r, e);
              this.drawLegendItems(i);
            }
            drawLegendTitle(t, n) {
              t.append("svg:g")
                .classed("legend-title", !0)
                .attr(
                  "transform",
                  `translate(${C.WIDTH_MARGIN}, ${C.HEIGHT_MARGIN})`
                )
                .attr("width", C.LEGEND_ITEM_WIDTH)
                .attr("height", C.LEGEND_ITEM_HEIGHT)
                .selectAll("text")
                .data([n.title])
                .enter()
                .append("text")
                .text(String)
                .style("font-size", "14px");
            }
            drawRightAlignedLegendItemGroups(t, n, r) {
              return this.drawLegendItemGroups(t, r)
                .attr("transform", (t, r) => {
                  const i = C.LEGEND_ITEM_HEIGHT;
                  return `translate(0 ,${e.isNil(n) ? (r + 1) * i : r * i})`;
                })
                .attr("width", C.LEGEND_ITEM_HEIGHT)
                .attr("height", C.LEGEND_ITEM_WIDTH);
            }
            drawBottomAlignedLegendItemGroups(t, n) {
              return this.drawLegendItemGroups(t, n)
                .attr(
                  "transform",
                  (t, n) => `translate(${n * C.LEGEND_ITEM_WIDTH}, 0)`
                )
                .attr("width", C.LEGEND_ITEM_HEIGHT);
            }
            drawLegendItemGroups(t, e) {
              return t
                .selectAll("g.legend")
                .data(e)
                .enter()
                .append("g")
                .attr("class", "legend")
                .style("fill", (t) => t.color)
                .on("click", (t, e, r) => {
                  const i = n.select(r[e]);
                  i.classed("hide")
                    ? (i
                        .classed("show", !0)
                        .classed("hide", !1)
                        .style("fill", t.color),
                      t.selection
                        .classed("show", !0)
                        .classed("hide", !1)
                        .style("fill-opacity", 1)
                        .style("stroke-opacity", 1))
                    : (i
                        .classed("hide", !0)
                        .classed("show", !1)
                        .style("fill", "#C0C0C0"),
                      t.selection
                        .classed("hide", !0)
                        .classed("show", !1)
                        .style("fill-opacity", 0)
                        .style("stroke-opacity", 0));
                });
            }
            drawLegendItems(t) {
              t
                .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 10)
                .attr("height", 10),
                t
                  .append("text")
                  .attr("x", 15)
                  .attr("y", 10)
                  .attr("width", 100)
                  .text((t) => t.name)
                  .style("font-size", "11px")
                  .classed("name", !0);
            }
          }
          (C.HEIGHT_MARGIN = 10),
            (C.WIDTH_MARGIN = 10),
            (C.LEGEND_ITEM_HEIGHT = 30),
            (C.LEGEND_ITEM_WIDTH = 180);
          class L {
            constructor(t) {
              this.cartesianTooltip = t;
            }
            getSeriesSelection(t, n, e) {
              const r = `${n.name.replace(/\s/g, "")}-${e}`;
              let i = t.select(`.${r}`);
              return i.empty() && (i = t.append("svg:g").classed(r, !0)), i;
            }
            setToolTipGenerator(t, n, e) {
              this.cartesianTooltip.setToolTipGenerator(t, n, e);
            }
          }
          class B extends L {
            constructor(t) {
              super(t);
            }
            drawSeries(t) {
              const e = t.seriesOption.data,
                r = t.xAxisData.axis.scale(),
                i = t.yAxisData.axis.scale(),
                o = this.getSeriesSelection(
                  t.seriesSection,
                  t.seriesOption,
                  t.seriesIndex
                ),
                a = o.selectAll("circle.points").data(e);
              a.exit().attr("class", "exit").remove(),
                a
                  .enter()
                  .append("circle")
                  .classed("points", !0)
                  .merge(a)
                  .attr("class", "enter points")
                  .attr("r", 3.5)
                  .attr("cy", (t) => i(t.y))
                  .attr("cx", (t) => r(t.x))
                  .attr("stroke", t.seriesOption.color)
                  .attr("fill", t.seriesOption.color)
                  .classed("points-data", !0)
                  .each((e, r, i) => {
                    const a = n.select(i[r]);
                    this.setToolTipGenerator(t.seriesOption, o, a);
                  });
            }
          }
          class R extends L {
            constructor(t) {
              super(t), (this.pointsRenderer = new B(t));
            }
            drawSeries(t) {
              const n = t.xAxisData.axis.scale(),
                e = t.yAxisData.axis.scale(),
                r = {
                  seriesSelection: this.getSeriesSelection(
                    t.seriesSection,
                    t.seriesOption,
                    t.seriesIndex
                  ),
                  seriesOption: t.seriesOption,
                  xScale: n,
                  yScale: e,
                };
              this.drawLine(r),
                this.pointsRenderer.drawSeries(t),
                r.seriesSelection
                  .selectAll("circle")
                  .style("fill-opacity", 0)
                  .style("stroke-opacity", 0);
            }
            drawLine(t) {
              const n = t.seriesOption.data,
                e = s
                  .line()
                  .x((n) => t.xScale(new Date(n.x)))
                  .y((n) => t.yScale(n.y))
                  .curve(s.curveMonotoneX),
                r = t.seriesSelection.selectAll("path.line").data([n]);
              r.exit().remove(),
                r
                  .enter()
                  .append("svg:path")
                  .classed("line", !0)
                  .merge(r)
                  .attr("d", e)
                  .attr("fill", "none")
                  .attr("stroke", t.seriesOption.color);
            }
          }
          class P extends L {
            constructor(t) {
              super(t), (this.lineRenderer = new R(t));
            }
            drawSeries(t) {
              const n = t.xAxisData.axis.scale(),
                e = t.yAxisData.axis.scale(),
                r = Number(t.seriesSection.attr("height")),
                i = {
                  seriesSelection: this.getSeriesSelection(
                    t.seriesSection,
                    t.seriesOption,
                    t.seriesIndex
                  ),
                  seriesOption: t.seriesOption,
                  xScale: n,
                  yScale: e,
                  height: r,
                };
              this.drawArea(i), this.lineRenderer.drawSeries(t);
            }
            drawArea(t) {
              const n = t.seriesOption.data,
                e = u.color(t.seriesOption.color);
              if (!e) return;
              e.opacity = 0.2;
              const r = s
                  .area()
                  .x((n) => t.xScale(new Date(n.x)))
                  .y0(t.height)
                  .y1((n) => t.yScale(n.y))
                  .curve(s.curveMonotoneX),
                i = t.seriesSelection.selectAll("path.area").data([n]);
              i.exit().remove(),
                i
                  .enter()
                  .append("svg:path")
                  .classed("area", !0)
                  .merge(i)
                  .attr("d", r)
                  .attr("fill", e.toString()),
                i
                  .on("mouseover", () => {
                    t.seriesSelection.classed("hide") ||
                      t.seriesSelection
                        .selectAll("circle")
                        .style("fill-opacity", 1)
                        .style("stroke-opacity", 1);
                  })
                  .on("mouseout", () => {
                    t.seriesSelection
                      .selectAll("circle")
                      .style("fill-opacity", 0)
                      .style("stroke-opacity", 0);
                  });
            }
            drawLine(t) {
              const n = t.seriesOption.data,
                e = t.seriesSelection
                  .selectAll("g.line")
                  .data([n])
                  .enter()
                  .append("g")
                  .classed("line", !0),
                r = s
                  .line()
                  .x((n) => t.xScale(new Date(n.x)))
                  .y((n) => t.yScale(n.y))
                  .curve(s.curveMonotoneX),
                i = e.selectAll("path").data([n]);
              i.exit().remove(),
                i
                  .enter()
                  .append("svg:path")
                  .merge(i)
                  .attr("d", r)
                  .attr("fill", "none")
                  .attr("stroke", t.seriesOption.color)
                  .attr("stroke-width", "2px");
            }
            drawPoints(t) {
              const e = t.seriesOption.data,
                r = t.seriesSelection
                  .selectAll("g.points")
                  .data([e])
                  .enter()
                  .append("g")
                  .classed("points", !0)
                  .selectAll("circle")
                  .data(e);
              r.exit().remove(),
                r
                  .enter()
                  .append("circle")
                  .merge(r)
                  .attr("r", 4.5)
                  .attr("cy", (n) => t.yScale(n.y))
                  .attr("cx", (n) => t.xScale(n.x))
                  .attr("stroke", t.seriesOption.color)
                  .attr("fill-opacity", 0)
                  .attr("stroke-opacity", 0)
                  .attr("fill", t.seriesOption.color)
                  .each((e, r, i) => {
                    const o = n.select(i[r]);
                    this.setToolTipGenerator(
                      t.seriesOption,
                      t.seriesSelection,
                      o
                    );
                  });
            }
          }
          class z extends L {
            constructor(t) {
              super(t);
            }
            drawSeries(n) {
              n.xAxisData.scaleType === t.AxisScaleType.Category
                ? this.drawSeriesForCategoryScale(n)
                : this.drawSeriesForNumericScale(n);
            }
            drawSeriesForCategoryScale(t) {
              const e = t.seriesOption.data,
                r = t.xAxisData.axis.scale(),
                i = t.yAxisData.axis.scale(),
                o = Number(t.seriesSection.attr("height")),
                a = this.getSeriesSelection(
                  t.seriesSection,
                  t.seriesOption,
                  t.seriesIndex
                ),
                u = a.selectAll("rect").data(e);
              u.exit().remove(),
                u
                  .enter()
                  .append("rect")
                  .merge(u)
                  .style("fill", t.seriesOption.color)
                  .attr("x", (t) => r(t.x))
                  .attr("y", (t) => i(t.y))
                  .attr("width", () => r.bandwidth())
                  .attr("height", (t) => o - i(t.y))
                  .each((e, r, i) => {
                    const o = n.select(i[r]);
                    this.setToolTipGenerator(t.seriesOption, a, o);
                  });
            }
            drawSeriesForNumericScale(t) {
              var e;
              const r = t.seriesOption.data,
                i = t.xAxisData.axis.scale(),
                o = t.yAxisData.axis.scale(),
                a = Number(t.seriesSection.attr("height")),
                u = Math.min(
                  null !== (e = this.getMinColumnWidth(r)) && void 0 !== e
                    ? e
                    : 20,
                  20
                ),
                s = this.getSeriesSelection(
                  t.seriesSection,
                  t.seriesOption,
                  t.seriesIndex
                ),
                c = s.selectAll("rect").data(r);
              c.exit().remove(),
                c
                  .enter()
                  .append("rect")
                  .merge(c)
                  .style("fill", t.seriesOption.color)
                  .attr("x", (t) => i(new Date(t.x - u / 2)))
                  .attr("y", (t) => o(t.y))
                  .attr("width", () => 20)
                  .attr("height", (t) => a - o(t.y))
                  .each((e, r, i) => {
                    const o = n.select(i[r]);
                    this.setToolTipGenerator(t.seriesOption, s, o);
                  });
            }
            getMinColumnWidth(t) {
              const n = a.extent(t, (t) => t.x),
                e = n[0],
                r = n[1];
              if (void 0 !== e && void 0 !== r) {
                const n = (r - e) / t.length - 20,
                  i = t.slice(1),
                  o = a.min(i.map((n, e) => n.x - t[e].x));
                if (void 0 !== o) return Math.max(0, Math.min(o, n));
              }
            }
          }
          class F {
            constructor(t, n) {
              (this.cartesianAxis = t), (this.cartesianTooltip = n);
            }
            drawSeries(t, n) {
              const e = t.select(".plot-section"),
                r = e.select(".series-section");
              this.updateScale(e, n),
                n.series.forEach((t, i) => {
                  const o = this.getAxisData(
                      e,
                      n.xAxis[t.xIndex],
                      !0,
                      t.xIndex
                    ),
                    a = this.getAxisData(e, n.yAxis[t.yIndex], !1, t.yIndex);
                  this.getSeriesRenderer(t).drawSeries({
                    seriesSection: r,
                    seriesOption: t,
                    seriesIndex: i,
                    xAxisData: o,
                    yAxisData: a,
                  });
                });
            }
            getAxisData(t, n, e, r) {
              const i = this.cartesianAxis.getAxisData(t, n, e, r);
              if (i) return i;
              throw new Error("Axis Scale is not set.");
            }
            updateScale(t, n) {
              0 !== n.series.length &&
                (this.updateXScale(t, n), this.updateYScale(t, n));
            }
            updateXScale(t, n) {
              n.xAxis.forEach((e, r) => {
                const i = this.getXDomainForAllSeries(n.series, r, e.scale);
                this.cartesianAxis.updateAxis(t, e, !0, r, i);
              });
            }
            updateYScale(t, n) {
              n.yAxis.forEach((e, r) => {
                const i = this.getYDomainForAllSeries(n.series, r, e.scale);
                this.cartesianAxis.updateAxis(t, e, !1, r, i);
              });
            }
            getXDomainForAllSeries(t, n, e) {
              return t
                .filter((t) => t.xIndex === n)
                .map((t) => this.getXDomain(t.data, e))
                .reduce((t, n) => this.getCombinedDomain(e, t, n));
            }
            getYDomainForAllSeries(t, n, e) {
              return t
                .filter((t) => t.yIndex === n)
                .map((t) => this.getYDomain(t.data, e))
                .reduce((t, n) => this.getCombinedDomain(e, t, n));
            }
            getCombinedDomain(n, r, i) {
              return n !== t.AxisScaleType.Category
                ? [Math.min(r[0], i[0]), Math.max(r[1], i[1])]
                : e.union(r, i);
            }
            getXDomain(n, e) {
              if (e !== t.AxisScaleType.Category) {
                const t = n.map((t) => t.x);
                return [Math.min(...t), Math.max(...t)];
              }
              return n.map((t) => t.x);
            }
            getYDomain(n, e) {
              return e !== t.AxisScaleType.Category
                ? [0, a.max(n, (t) => t.y)]
                : n.map((t) => t.y);
            }
            getSeriesRenderer(n) {
              switch (n.visualization.toLowerCase()) {
                case t.VisualizationType.Area:
                  return new P(this.cartesianTooltip);
                case t.VisualizationType.Column:
                  return new z(this.cartesianTooltip);
                case t.VisualizationType.Points:
                  return new B(this.cartesianTooltip);
                case t.VisualizationType.Line:
                default:
                  return new R(this.cartesianTooltip);
              }
            }
          }
          class W {
            setToolTipGenerator(t, n, e) {
              this.initTooltip(t.tooltip),
                e
                  .on("mouseover.tooltip", (e) =>
                    this.onTooltipMouseOver(t, e, n)
                  )
                  .on("mouseout.tooltip", () => this.onTooltipMouseOut()),
                this.toolTip &&
                  this.toolTip.on("mouseout.tooltip", () =>
                    this.onTooltipMouseOut()
                  );
            }
            initTooltip(t) {
              if (t.visible) {
                const e = n.select("body"),
                  r = e.select("div.tooltip");
                r.empty()
                  ? (this.toolTip = e
                      .append("div")
                      .attr("class", "tooltip")
                      .style("width", "148px")
                      .style("height", "48px")
                      .style("line-height", "25px")
                      .style("text-align", "center")
                      .style("background", "#FFFFFF")
                      .style("opacity", 0)
                      .style("border", "1px solid")
                      .style("position", "absolute"))
                  : (this.toolTip = r),
                  t.formatter || (t.formatter = (t) => `${t.x}: ${t.y}`);
              }
            }
            onTooltipMouseOver(t, e, r) {
              if (void 0 === this.toolTip)
                throw Error("tooltip div not defined");
              if (r.classed("hide")) return;
              const i = n.event;
              if (this.isMouseOverToolTipDiv(i)) return;
              const o = u.color(t.color);
              o &&
                (this.toolTip
                  .style("opacity", 0.9)
                  .style("border", `1px solid ${o.toString()}`),
                this.toolTip
                  .html(t.tooltip.formatter(e))
                  .style("font-size", "14px")
                  .style("color", t.color)
                  .style("left", i.pageX - W.DIMENSTION_X / 2 + "px")
                  .style("top", i.pageY - W.DIMENSTION_Y + "px"));
            }
            onTooltipMouseOut() {
              if (void 0 === this.toolTip) return;
              const t = n.event;
              this.isMouseOverToolTipDiv(t) ||
                this.toolTip
                  .style("opacity", 0)
                  .style("left", "0px")
                  .style("top", "0px");
            }
            isMouseOverToolTipDiv(t) {
              if (void 0 === this.toolTip) return !1;
              const n = this.toolTip.style("left"),
                e = Number(n.replace(/px/g, "")),
                r = this.toolTip.style("top"),
                i = Number(r.replace(/px/g, "")),
                o = t.pageX >= e && t.pageX < e + W.DIMENSTION_X,
                a = t.pageY >= i && t.pageY < i + W.DIMENSTION_Y;
              return o && a;
            }
          }
          (W.DIMENSTION_X = 150), (W.DIMENSTION_Y = 54);
          (t.CartesianChart = class extends h {
            constructor(n, r) {
              super(
                n,
                e.defaultsDeep({}, r, {
                  animation: !1,
                  style: {
                    backgroundColor: "#FFFFFF",
                    fontFamily:
                      '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                    fontSize: "12px",
                  },
                  margin: { top: 5, left: 5, bottom: 5, right: 5 },
                  xAxis: [],
                  yAxis: [],
                  series: [],
                  legend: {
                    title: "",
                    visible: !0,
                    align: t.LegendAlign.Right,
                  },
                })
              ),
                (this.layout = new j()),
                (this.axis = new I()),
                (this.legend = new C()),
                (this.tooltip = new W()),
                (this.series = new F(this.axis, this.tooltip)),
                (this.chartSelection = this.buildChartSelection(
                  n,
                  this.options
                )),
                this.draw();
            }
            draw() {
              this.drawLayout(),
                this.drawAxes(),
                this.drawSeries(),
                this.drawLegends();
            }
            redraw() {
              this.clear(), this.draw();
            }
            reflow() {
              throw new Error("Method not implemented.");
            }
            addSeries(t, n) {
              this.options.series.push(t),
                n && this.series.drawSeries(this.chartSelection, this.options);
            }
            removeSeries(t) {
              (this.options.series = this.options.series.filter(
                (n) => n.name !== t
              )),
                this.series.drawSeries(this.chartSelection, this.options);
            }
            setData(t, n, e = !0) {
              const r = this.options.series.find((n) => n.name === t);
              if (!r) throw new Error(`Series: ${t} does not exist`);
              (r.data = n),
                e && this.series.drawSeries(this.chartSelection, this.options);
            }
            addPoints(t, n, e) {
              const r = this.options.series.find((n) => n.name === t);
              if (void 0 === r) throw Error("Unknown series");
              r.data.push(...n),
                e && this.series.drawSeries(this.chartSelection, this.options);
            }
            addPoint(t, n, e) {
              const r = this.options.series.find((n) => n.name === t);
              if (void 0 === r) throw Error("Unknown series");
              r.data.push(n),
                e && this.series.drawSeries(this.chartSelection, this.options);
            }
            clear() {
              this.chartSelection.selectAll("*").remove();
            }
            buildChartSelection(t, e) {
              const r = n.select(t),
                i = r.node().offsetWidth,
                o = r.node().offsetHeight;
              return r
                .append("svg")
                .attr("height", o)
                .attr("width", i)
                .append("svg:g")
                .classed("chart", !0)
                .attr("height", o - e.margin.top - e.margin.bottom)
                .attr("width", i - e.margin.left - e.margin.right)
                .attr(
                  "transform",
                  `translate(${e.margin.left}, ${e.margin.top})`
                );
            }
            drawLayout() {
              this.layout.drawLayout(this.chartSelection, this.options);
            }
            drawAxes() {
              this.axis.drawAxes(this.chartSelection, this.options);
            }
            drawLegends() {
              this.legend.drawLegends(this.chartSelection, this.options);
            }
            drawSeries() {
              this.series.drawSeries(this.chartSelection, this.options);
            }
          }),
            (t.CartesianObject = h),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })(n, e(297), e(750), e(956), e(479), e(216), e(65), e(54), e(98));
      },
      28: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => u });
        var r = e(15),
          i = e.n(r),
          o = e(645),
          a = e.n(o)()(i());
        a.push([
          t.id,
          "h1,\nh2 {\n  font-family: Lato;\n}\n\n.app-root {\n  width: 100%;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n\n}\n\n.docs {\n  \n}\n\n.charts{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: 300px;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "AAAA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;;EAEb,aAAa;EACb,sBAAsB;;AAExB;;AAEA;;AAEA;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB",
            sourcesContent: [
              "h1,\nh2 {\n  font-family: Lato;\n}\n\n.app-root {\n  width: 100%;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n\n}\n\n.docs {\n  \n}\n\n.charts{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: 300px;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const u = a;
      },
      645: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = t(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
              }).join("");
            }),
            (n.i = function (t, e, r) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var s = [].concat(t[u]);
                (r && i[s[0]]) ||
                  (e &&
                    (s[2]
                      ? (s[2] = "".concat(e, " and ").concat(s[2]))
                      : (s[2] = e)),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      15: (t) => {
        "use strict";
        function n(t, n) {
          (null == n || n > t.length) && (n = t.length);
          for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
          return r;
        }
        t.exports = function (t) {
          var e,
            r,
            i =
              ((r = 4),
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = t)) ||
                (function (t, n) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(t)
                  ) {
                    var e = [],
                      r = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, u = t[Symbol.iterator]();
                        !(r = (a = u.next()).done) &&
                        (e.push(a.value), !n || e.length !== n);
                        r = !0
                      );
                    } catch (t) {
                      (i = !0), (o = t);
                    } finally {
                      try {
                        r || null == u.return || u.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return e;
                  }
                })(e, r) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(t)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? n(t, e)
                        : void 0
                    );
                  }
                })(e, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            o = i[1],
            a = i[3];
          if ("function" == typeof btoa) {
            var u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                u
              ),
              c = "/*# ".concat(s, " */"),
              l = a.sources.map(function (t) {
                return "/*# sourceURL="
                  .concat(a.sourceRoot || "")
                  .concat(t, " */");
              });
            return [o].concat(l).concat([c]).join("\n");
          }
          return [o].join("\n");
        };
      },
      65: (t, n, e) => {
        "use strict";
        function r(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        }
        function i(t) {
          var n;
          return (
            1 === t.length &&
              ((n = t),
              (t = function (t, e) {
                return r(n(t), e);
              })),
            {
              left: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        }
        e.r(n),
          e.d(n, {
            ascending: () => r,
            bisect: () => s,
            bisectLeft: () => u,
            bisectRight: () => a,
            bisector: () => i,
            cross: () => f,
            descending: () => h,
            deviation: () => v,
            extent: () => g,
            histogram: () => E,
            max: () => C,
            mean: () => L,
            median: () => B,
            merge: () => R,
            min: () => P,
            pairs: () => c,
            permute: () => z,
            quantile: () => D,
            range: () => w,
            scan: () => F,
            shuffle: () => W,
            sum: () => U,
            thresholdFreedmanDiaconis: () => I,
            thresholdScott: () => j,
            thresholdSturges: () => N,
            tickIncrement: () => O,
            tickStep: () => k,
            ticks: () => T,
            transpose: () => H,
            variance: () => d,
            zip: () => q,
          });
        var o = i(r),
          a = o.right,
          u = o.left;
        const s = a;
        function c(t, n) {
          null == n && (n = l);
          for (
            var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r);
            e < r;

          )
            o[e] = n(i, (i = t[++e]));
          return o;
        }
        function l(t, n) {
          return [t, n];
        }
        function f(t, n, e) {
          var r,
            i,
            o,
            a,
            u = t.length,
            s = n.length,
            c = new Array(u * s);
          for (null == e && (e = l), r = o = 0; r < u; ++r)
            for (a = t[r], i = 0; i < s; ++i, ++o) c[o] = e(a, n[i]);
          return c;
        }
        function h(t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        }
        function p(t) {
          return null === t ? NaN : +t;
        }
        function d(t, n) {
          var e,
            r,
            i = t.length,
            o = 0,
            a = -1,
            u = 0,
            s = 0;
          if (null == n)
            for (; ++a < i; )
              isNaN((e = p(t[a]))) || (s += (r = e - u) * (e - (u += r / ++o)));
          else
            for (; ++a < i; )
              isNaN((e = p(n(t[a], a, t)))) ||
                (s += (r = e - u) * (e - (u += r / ++o)));
          if (o > 1) return s / (o - 1);
        }
        function v(t, n) {
          var e = d(t, n);
          return e ? Math.sqrt(e) : e;
        }
        function g(t, n) {
          var e,
            r,
            i,
            o = t.length,
            a = -1;
          if (null == n) {
            for (; ++a < o; )
              if (null != (e = t[a]) && e >= e)
                for (r = i = e; ++a < o; )
                  null != (e = t[a]) && (r > e && (r = e), i < e && (i = e));
          } else
            for (; ++a < o; )
              if (null != (e = n(t[a], a, t)) && e >= e)
                for (r = i = e; ++a < o; )
                  null != (e = n(t[a], a, t)) &&
                    (r > e && (r = e), i < e && (i = e));
          return [r, i];
        }
        var y = Array.prototype,
          _ = y.slice,
          x = y.map;
        function m(t) {
          return function () {
            return t;
          };
        }
        function b(t) {
          return t;
        }
        function w(t, n, e) {
          (t = +t),
            (n = +n),
            (e =
              (i = arguments.length) < 2
                ? ((n = t), (t = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((n - t) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = t + r * e;
          return o;
        }
        var A = Math.sqrt(50),
          S = Math.sqrt(10),
          M = Math.sqrt(2);
        function T(t, n, e) {
          var r,
            i,
            o,
            a,
            u = -1;
          if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (a = O(t, n, e)) || !isFinite(a))
          )
            return [];
          if (a > 0)
            for (
              t = Math.ceil(t / a),
                n = Math.floor(n / a),
                o = new Array((i = Math.ceil(n - t + 1)));
              ++u < i;

            )
              o[u] = (t + u) * a;
          else
            for (
              t = Math.floor(t * a),
                n = Math.ceil(n * a),
                o = new Array((i = Math.ceil(t - n + 1)));
              ++u < i;

            )
              o[u] = (t - u) / a;
          return r && o.reverse(), o;
        }
        function O(t, n, e) {
          var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            o = r / Math.pow(10, i);
          return i >= 0
            ? (o >= A ? 10 : o >= S ? 5 : o >= M ? 2 : 1) * Math.pow(10, i)
            : -Math.pow(10, -i) / (o >= A ? 10 : o >= S ? 5 : o >= M ? 2 : 1);
        }
        function k(t, n, e) {
          var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i;
          return (
            o >= A ? (i *= 10) : o >= S ? (i *= 5) : o >= M && (i *= 2),
            n < t ? -i : i
          );
        }
        function N(t) {
          return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
        }
        function E() {
          var t = b,
            n = g,
            e = N;
          function r(r) {
            var i,
              o,
              a = r.length,
              u = new Array(a);
            for (i = 0; i < a; ++i) u[i] = t(r[i], i, r);
            var c = n(u),
              l = c[0],
              f = c[1],
              h = e(u, l, f);
            Array.isArray(h) ||
              ((h = k(l, f, h)), (h = w(Math.ceil(l / h) * h, f, h)));
            for (var p = h.length; h[0] <= l; ) h.shift(), --p;
            for (; h[p - 1] > f; ) h.pop(), --p;
            var d,
              v = new Array(p + 1);
            for (i = 0; i <= p; ++i)
              ((d = v[i] = []).x0 = i > 0 ? h[i - 1] : l),
                (d.x1 = i < p ? h[i] : f);
            for (i = 0; i < a; ++i)
              l <= (o = u[i]) && o <= f && v[s(h, o, 0, p)].push(r[i]);
            return v;
          }
          return (
            (r.value = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : m(n)), r)
                : t;
            }),
            (r.domain = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : m([t[0], t[1]])), r)
                : n;
            }),
            (r.thresholds = function (t) {
              return arguments.length
                ? ((e =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? m(_.call(t))
                      : m(t)),
                  r)
                : e;
            }),
            r
          );
        }
        function D(t, n, e) {
          if ((null == e && (e = p), (r = t.length))) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r,
              i = (r - 1) * n,
              o = Math.floor(i),
              a = +e(t[o], o, t);
            return a + (+e(t[o + 1], o + 1, t) - a) * (i - o);
          }
        }
        function I(t, n, e) {
          return (
            (t = x.call(t, p).sort(r)),
            Math.ceil(
              (e - n) /
                (2 * (D(t, 0.75) - D(t, 0.25)) * Math.pow(t.length, -1 / 3))
            )
          );
        }
        function j(t, n, e) {
          return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)));
        }
        function C(t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            for (; ++o < i; )
              if (null != (e = t[o]) && e >= e)
                for (r = e; ++o < i; ) null != (e = t[o]) && e > r && (r = e);
          } else
            for (; ++o < i; )
              if (null != (e = n(t[o], o, t)) && e >= e)
                for (r = e; ++o < i; )
                  null != (e = n(t[o], o, t)) && e > r && (r = e);
          return r;
        }
        function L(t, n) {
          var e,
            r = t.length,
            i = r,
            o = -1,
            a = 0;
          if (null == n)
            for (; ++o < r; ) isNaN((e = p(t[o]))) ? --i : (a += e);
          else for (; ++o < r; ) isNaN((e = p(n(t[o], o, t)))) ? --i : (a += e);
          if (i) return a / i;
        }
        function B(t, n) {
          var e,
            i = t.length,
            o = -1,
            a = [];
          if (null == n) for (; ++o < i; ) isNaN((e = p(t[o]))) || a.push(e);
          else for (; ++o < i; ) isNaN((e = p(n(t[o], o, t)))) || a.push(e);
          return D(a.sort(r), 0.5);
        }
        function R(t) {
          for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i; )
            a += t[o].length;
          for (e = new Array(a); --i >= 0; )
            for (n = (r = t[i]).length; --n >= 0; ) e[--a] = r[n];
          return e;
        }
        function P(t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            for (; ++o < i; )
              if (null != (e = t[o]) && e >= e)
                for (r = e; ++o < i; ) null != (e = t[o]) && r > e && (r = e);
          } else
            for (; ++o < i; )
              if (null != (e = n(t[o], o, t)) && e >= e)
                for (r = e; ++o < i; )
                  null != (e = n(t[o], o, t)) && r > e && (r = e);
          return r;
        }
        function z(t, n) {
          for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
          return r;
        }
        function F(t, n) {
          if ((e = t.length)) {
            var e,
              i,
              o = 0,
              a = 0,
              u = t[a];
            for (null == n && (n = r); ++o < e; )
              (n((i = t[o]), u) < 0 || 0 !== n(u, u)) && ((u = i), (a = o));
            return 0 === n(u, u) ? a : void 0;
          }
        }
        function W(t, n, e) {
          for (
            var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
            o;

          )
            (i = (Math.random() * o--) | 0),
              (r = t[o + n]),
              (t[o + n] = t[i + n]),
              (t[i + n] = r);
          return t;
        }
        function U(t, n) {
          var e,
            r = t.length,
            i = -1,
            o = 0;
          if (null == n) for (; ++i < r; ) (e = +t[i]) && (o += e);
          else for (; ++i < r; ) (e = +n(t[i], i, t)) && (o += e);
          return o;
        }
        function H(t) {
          if (!(i = t.length)) return [];
          for (var n = -1, e = P(t, Y), r = new Array(e); ++n < e; )
            for (var i, o = -1, a = (r[n] = new Array(i)); ++o < i; )
              a[o] = t[o][n];
          return r;
        }
        function Y(t) {
          return t.length;
        }
        function q() {
          return H(arguments);
        }
      },
      216: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            axisBottom: () => d,
            axisLeft: () => v,
            axisRight: () => p,
            axisTop: () => h,
          });
        var r = Array.prototype.slice;
        function i(t) {
          return t;
        }
        var o = 1e-6;
        function a(t) {
          return "translate(" + (t + 0.5) + ",0)";
        }
        function u(t) {
          return "translate(0," + (t + 0.5) + ")";
        }
        function s(t) {
          return function (n) {
            return +t(n);
          };
        }
        function c(t) {
          var n = Math.max(0, t.bandwidth() - 1) / 2;
          return (
            t.round() && (n = Math.round(n)),
            function (e) {
              return +t(e) + n;
            }
          );
        }
        function l() {
          return !this.__axis;
        }
        function f(t, n) {
          var e = [],
            f = null,
            h = null,
            p = 6,
            d = 6,
            v = 3,
            g = 1 === t || 4 === t ? -1 : 1,
            y = 4 === t || 2 === t ? "x" : "y",
            _ = 1 === t || 3 === t ? a : u;
          function x(r) {
            var a =
                null == f ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : f,
              u = null == h ? (n.tickFormat ? n.tickFormat.apply(n, e) : i) : h,
              x = Math.max(p, 0) + v,
              m = n.range(),
              b = +m[0] + 0.5,
              w = +m[m.length - 1] + 0.5,
              A = (n.bandwidth ? c : s)(n.copy()),
              S = r.selection ? r.selection() : r,
              M = S.selectAll(".domain").data([null]),
              T = S.selectAll(".tick").data(a, n).order(),
              O = T.exit(),
              k = T.enter().append("g").attr("class", "tick"),
              N = T.select("line"),
              E = T.select("text");
            (M = M.merge(
              M.enter()
                .insert("path", ".tick")
                .attr("class", "domain")
                .attr("stroke", "currentColor")
            )),
              (T = T.merge(k)),
              (N = N.merge(
                k
                  .append("line")
                  .attr("stroke", "currentColor")
                  .attr(y + "2", g * p)
              )),
              (E = E.merge(
                k
                  .append("text")
                  .attr("fill", "currentColor")
                  .attr(y, g * x)
                  .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")
              )),
              r !== S &&
                ((M = M.transition(r)),
                (T = T.transition(r)),
                (N = N.transition(r)),
                (E = E.transition(r)),
                (O = O.transition(r)
                  .attr("opacity", o)
                  .attr("transform", function (t) {
                    return isFinite((t = A(t)))
                      ? _(t)
                      : this.getAttribute("transform");
                  })),
                k.attr("opacity", o).attr("transform", function (t) {
                  var n = this.parentNode.__axis;
                  return _(n && isFinite((n = n(t))) ? n : A(t));
                })),
              O.remove(),
              M.attr(
                "d",
                4 === t || 2 == t
                  ? d
                    ? "M" + g * d + "," + b + "H0.5V" + w + "H" + g * d
                    : "M0.5," + b + "V" + w
                  : d
                  ? "M" + b + "," + g * d + "V0.5H" + w + "V" + g * d
                  : "M" + b + ",0.5H" + w
              ),
              T.attr("opacity", 1).attr("transform", function (t) {
                return _(A(t));
              }),
              N.attr(y + "2", g * p),
              E.attr(y, g * x).text(u),
              S.filter(l)
                .attr("fill", "none")
                .attr("font-size", 10)
                .attr("font-family", "sans-serif")
                .attr(
                  "text-anchor",
                  2 === t ? "start" : 4 === t ? "end" : "middle"
                ),
              S.each(function () {
                this.__axis = A;
              });
          }
          return (
            (x.scale = function (t) {
              return arguments.length ? ((n = t), x) : n;
            }),
            (x.ticks = function () {
              return (e = r.call(arguments)), x;
            }),
            (x.tickArguments = function (t) {
              return arguments.length
                ? ((e = null == t ? [] : r.call(t)), x)
                : e.slice();
            }),
            (x.tickValues = function (t) {
              return arguments.length
                ? ((f = null == t ? null : r.call(t)), x)
                : f && f.slice();
            }),
            (x.tickFormat = function (t) {
              return arguments.length ? ((h = t), x) : h;
            }),
            (x.tickSize = function (t) {
              return arguments.length ? ((p = d = +t), x) : p;
            }),
            (x.tickSizeInner = function (t) {
              return arguments.length ? ((p = +t), x) : p;
            }),
            (x.tickSizeOuter = function (t) {
              return arguments.length ? ((d = +t), x) : d;
            }),
            (x.tickPadding = function (t) {
              return arguments.length ? ((v = +t), x) : v;
            }),
            x
          );
        }
        function h(t) {
          return f(1, t);
        }
        function p(t) {
          return f(2, t);
        }
        function d(t) {
          return f(3, t);
        }
        function v(t) {
          return f(4, t);
        }
      },
      372: (t, n, e) => {
        "use strict";
        e.d(n, {
          Il: () => i,
          xV: () => o,
          J5: () => a,
          ZP: () => m,
          SU: () => A,
          B8: () => S,
          Ss: () => M,
          Ym: () => D,
        });
        var r = e(87);
        function i() {}
        var o = 0.7,
          a = 1 / o,
          u = "\\s*([+-]?\\d+)\\s*",
          s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          l = /^#([0-9a-f]{3,8})$/,
          f = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
          h = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
          p = new RegExp("^rgba\\(" + [u, u, u, s] + "\\)$"),
          d = new RegExp("^rgba\\(" + [c, c, c, s] + "\\)$"),
          v = new RegExp("^hsl\\(" + [s, c, c] + "\\)$"),
          g = new RegExp("^hsla\\(" + [s, c, c, s] + "\\)$"),
          y = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function _() {
          return this.rgb().formatHex();
        }
        function x() {
          return this.rgb().formatRgb();
        }
        function m(t) {
          var n, e;
          return (
            (t = (t + "").trim().toLowerCase()),
            (n = l.exec(t))
              ? ((e = n[1].length),
                (n = parseInt(n[1], 16)),
                6 === e
                  ? b(n)
                  : 3 === e
                  ? new M(
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      ((15 & n) << 4) | (15 & n),
                      1
                    )
                  : 8 === e
                  ? w(
                      (n >> 24) & 255,
                      (n >> 16) & 255,
                      (n >> 8) & 255,
                      (255 & n) / 255
                    )
                  : 4 === e
                  ? w(
                      ((n >> 12) & 15) | ((n >> 8) & 240),
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      (((15 & n) << 4) | (15 & n)) / 255
                    )
                  : null)
              : (n = f.exec(t))
              ? new M(n[1], n[2], n[3], 1)
              : (n = h.exec(t))
              ? new M(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  1
                )
              : (n = p.exec(t))
              ? w(n[1], n[2], n[3], n[4])
              : (n = d.exec(t))
              ? w(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  n[4]
                )
              : (n = v.exec(t))
              ? N(n[1], n[2] / 100, n[3] / 100, 1)
              : (n = g.exec(t))
              ? N(n[1], n[2] / 100, n[3] / 100, n[4])
              : y.hasOwnProperty(t)
              ? b(y[t])
              : "transparent" === t
              ? new M(NaN, NaN, NaN, 0)
              : null
          );
        }
        function b(t) {
          return new M((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
        }
        function w(t, n, e, r) {
          return r <= 0 && (t = n = e = NaN), new M(t, n, e, r);
        }
        function A(t) {
          return (
            t instanceof i || (t = m(t)),
            t ? new M((t = t.rgb()).r, t.g, t.b, t.opacity) : new M()
          );
        }
        function S(t, n, e, r) {
          return 1 === arguments.length
            ? A(t)
            : new M(t, n, e, null == r ? 1 : r);
        }
        function M(t, n, e, r) {
          (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
        }
        function T() {
          return "#" + k(this.r) + k(this.g) + k(this.b);
        }
        function O() {
          var t = this.opacity;
          return (
            (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
              ? "rgb("
              : "rgba(") +
            Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
            (1 === t ? ")" : ", " + t + ")")
          );
        }
        function k(t) {
          return (
            ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
              ? "0"
              : "") + t.toString(16)
          );
        }
        function N(t, n, e, r) {
          return (
            r <= 0
              ? (t = n = e = NaN)
              : e <= 0 || e >= 1
              ? (t = n = NaN)
              : n <= 0 && (t = NaN),
            new I(t, n, e, r)
          );
        }
        function E(t) {
          if (t instanceof I) return new I(t.h, t.s, t.l, t.opacity);
          if ((t instanceof i || (t = m(t)), !t)) return new I();
          if (t instanceof I) return t;
          var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            o = Math.min(n, e, r),
            a = Math.max(n, e, r),
            u = NaN,
            s = a - o,
            c = (a + o) / 2;
          return (
            s
              ? ((u =
                  n === a
                    ? (e - r) / s + 6 * (e < r)
                    : e === a
                    ? (r - n) / s + 2
                    : (n - e) / s + 4),
                (s /= c < 0.5 ? a + o : 2 - a - o),
                (u *= 60))
              : (s = c > 0 && c < 1 ? 0 : u),
            new I(u, s, c, t.opacity)
          );
        }
        function D(t, n, e, r) {
          return 1 === arguments.length
            ? E(t)
            : new I(t, n, e, null == r ? 1 : r);
        }
        function I(t, n, e, r) {
          (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
        }
        function j(t, n, e) {
          return (
            255 *
            (t < 60
              ? n + ((e - n) * t) / 60
              : t < 180
              ? e
              : t < 240
              ? n + ((e - n) * (240 - t)) / 60
              : n)
          );
        }
        (0, r.Z)(i, m, {
          copy: function (t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable: function () {
            return this.rgb().displayable();
          },
          hex: _,
          formatHex: _,
          formatHsl: function () {
            return E(this).formatHsl();
          },
          formatRgb: x,
          toString: x,
        }),
          (0, r.Z)(
            M,
            S,
            (0, r.l)(i, {
              brighter: function (t) {
                return (
                  (t = null == t ? a : Math.pow(a, t)),
                  new M(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              darker: function (t) {
                return (
                  (t = null == t ? o : Math.pow(o, t)),
                  new M(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              rgb: function () {
                return this;
              },
              displayable: function () {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: T,
              formatHex: T,
              formatRgb: O,
              toString: O,
            })
          ),
          (0, r.Z)(
            I,
            D,
            (0, r.l)(i, {
              brighter: function (t) {
                return (
                  (t = null == t ? a : Math.pow(a, t)),
                  new I(this.h, this.s, this.l * t, this.opacity)
                );
              },
              darker: function (t) {
                return (
                  (t = null == t ? o : Math.pow(o, t)),
                  new I(this.h, this.s, this.l * t, this.opacity)
                );
              },
              rgb: function () {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  e = this.l,
                  r = e + (e < 0.5 ? e : 1 - e) * n,
                  i = 2 * e - r;
                return new M(
                  j(t >= 240 ? t - 240 : t + 120, i, r),
                  j(t, i, r),
                  j(t < 120 ? t + 240 : t - 120, i, r),
                  this.opacity
                );
              },
              displayable: function () {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl: function () {
                var t = this.opacity;
                return (
                  (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                    ? "hsl("
                    : "hsla(") +
                  (this.h || 0) +
                  ", " +
                  100 * (this.s || 0) +
                  "%, " +
                  100 * (this.l || 0) +
                  "%" +
                  (1 === t ? ")" : ", " + t + ")")
                );
              },
            })
          );
      },
      87: (t, n, e) => {
        "use strict";
        function r(t, n, e) {
          (t.prototype = n.prototype = e), (e.constructor = t);
        }
        function i(t, n) {
          var e = Object.create(t.prototype);
          for (var r in n) e[r] = n[r];
          return e;
        }
        e.d(n, { Z: () => r, l: () => i });
      },
      54: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            color: () => r.ZP,
            cubehelix: () => C,
            gray: () => p,
            hcl: () => w,
            hsl: () => r.Ym,
            lab: () => d,
            lch: () => b,
            rgb: () => r.B8,
          });
        var r = e(372),
          i = e(87),
          o = Math.PI / 180,
          a = 180 / Math.PI,
          u = 0.96422,
          s = 0.82521,
          c = 4 / 29,
          l = 6 / 29,
          f = 3 * l * l;
        function h(t) {
          if (t instanceof v) return new v(t.l, t.a, t.b, t.opacity);
          if (t instanceof A) return S(t);
          t instanceof r.Ss || (t = (0, r.SU)(t));
          var n,
            e,
            i = x(t.r),
            o = x(t.g),
            a = x(t.b),
            c = g((0.2225045 * i + 0.7168786 * o + 0.0606169 * a) / 1);
          return (
            i === o && o === a
              ? (n = e = c)
              : ((n = g((0.4360747 * i + 0.3850649 * o + 0.1430804 * a) / u)),
                (e = g((0.0139322 * i + 0.0971045 * o + 0.7141733 * a) / s))),
            new v(116 * c - 16, 500 * (n - c), 200 * (c - e), t.opacity)
          );
        }
        function p(t, n) {
          return new v(t, 0, 0, null == n ? 1 : n);
        }
        function d(t, n, e, r) {
          return 1 === arguments.length
            ? h(t)
            : new v(t, n, e, null == r ? 1 : r);
        }
        function v(t, n, e, r) {
          (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
        }
        function g(t) {
          return t > 0.008856451679035631 ? Math.pow(t, 1 / 3) : t / f + c;
        }
        function y(t) {
          return t > l ? t * t * t : f * (t - c);
        }
        function _(t) {
          return (
            255 *
            (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
          );
        }
        function x(t) {
          return (t /= 255) <= 0.04045
            ? t / 12.92
            : Math.pow((t + 0.055) / 1.055, 2.4);
        }
        function m(t) {
          if (t instanceof A) return new A(t.h, t.c, t.l, t.opacity);
          if ((t instanceof v || (t = h(t)), 0 === t.a && 0 === t.b))
            return new A(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
          var n = Math.atan2(t.b, t.a) * a;
          return new A(
            n < 0 ? n + 360 : n,
            Math.sqrt(t.a * t.a + t.b * t.b),
            t.l,
            t.opacity
          );
        }
        function b(t, n, e, r) {
          return 1 === arguments.length
            ? m(t)
            : new A(e, n, t, null == r ? 1 : r);
        }
        function w(t, n, e, r) {
          return 1 === arguments.length
            ? m(t)
            : new A(t, n, e, null == r ? 1 : r);
        }
        function A(t, n, e, r) {
          (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
        }
        function S(t) {
          if (isNaN(t.h)) return new v(t.l, 0, 0, t.opacity);
          var n = t.h * o;
          return new v(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }
        (0, i.Z)(
          v,
          d,
          (0, i.l)(r.Il, {
            brighter: function (t) {
              return new v(
                this.l + 18 * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              );
            },
            darker: function (t) {
              return new v(
                this.l - 18 * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              );
            },
            rgb: function () {
              var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
              return (
                (n = u * y(n)),
                (t = 1 * y(t)),
                (e = s * y(e)),
                new r.Ss(
                  _(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
                  _(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
                  _(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
                  this.opacity
                )
              );
            },
          })
        ),
          (0, i.Z)(
            A,
            w,
            (0, i.l)(r.Il, {
              brighter: function (t) {
                return new A(
                  this.h,
                  this.c,
                  this.l + 18 * (null == t ? 1 : t),
                  this.opacity
                );
              },
              darker: function (t) {
                return new A(
                  this.h,
                  this.c,
                  this.l - 18 * (null == t ? 1 : t),
                  this.opacity
                );
              },
              rgb: function () {
                return S(this).rgb();
              },
            })
          );
        var M = -0.14861,
          T = 1.78277,
          O = -0.29227,
          k = -0.90649,
          N = 1.97294,
          E = N * k,
          D = N * T,
          I = T * O - k * M;
        function j(t) {
          if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
          t instanceof r.Ss || (t = (0, r.SU)(t));
          var n = t.r / 255,
            e = t.g / 255,
            i = t.b / 255,
            o = (I * i + E * n - D * e) / (I + E - D),
            u = i - o,
            s = (N * (e - o) - O * u) / k,
            c = Math.sqrt(s * s + u * u) / (N * o * (1 - o)),
            l = c ? Math.atan2(s, u) * a - 120 : NaN;
          return new L(l < 0 ? l + 360 : l, c, o, t.opacity);
        }
        function C(t, n, e, r) {
          return 1 === arguments.length
            ? j(t)
            : new L(t, n, e, null == r ? 1 : r);
        }
        function L(t, n, e, r) {
          (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
        }
        (0, i.Z)(
          L,
          C,
          (0, i.l)(r.Il, {
            brighter: function (t) {
              return (
                (t = null == t ? r.J5 : Math.pow(r.J5, t)),
                new L(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? r.xV : Math.pow(r.xV, t)),
                new L(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = isNaN(this.h) ? 0 : (this.h + 120) * o,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                i = Math.cos(t),
                a = Math.sin(t);
              return new r.Ss(
                255 * (n + e * (M * i + T * a)),
                255 * (n + e * (O * i + k * a)),
                255 * (n + e * (N * i)),
                this.opacity
              );
            },
          })
        );
      },
      479: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            scaleBand: () => y,
            scaleDiverging: () => xn,
            scaleDivergingLog: () => mn,
            scaleDivergingPow: () => wn,
            scaleDivergingSqrt: () => An,
            scaleDivergingSymlog: () => bn,
            scaleIdentity: () => ct,
            scaleImplicit: () => v,
            scaleLinear: () => st,
            scaleLog: () => _t,
            scaleOrdinal: () => g,
            scalePoint: () => x,
            scalePow: () => Ot,
            scaleQuantile: () => Nt,
            scaleQuantize: () => Et,
            scaleSequential: () => hn,
            scaleSequentialLog: () => pn,
            scaleSequentialPow: () => vn,
            scaleSequentialQuantile: () => yn,
            scaleSequentialSqrt: () => gn,
            scaleSequentialSymlog: () => dn,
            scaleSqrt: () => kt,
            scaleSymlog: () => wt,
            scaleThreshold: () => Dt,
            scaleTime: () => Jt,
            scaleUtc: () => cn,
            tickFormat: () => at,
          });
        var r = e(65);
        function i(t, n) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(t);
              break;
            default:
              this.range(n).domain(t);
          }
          return this;
        }
        function o(t, n) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.interpolator(t);
              break;
            default:
              this.interpolator(n).domain(t);
          }
          return this;
        }
        var a = "$";
        function u() {}
        function s(t, n) {
          var e = new u();
          if (t instanceof u)
            t.each(function (t, n) {
              e.set(n, t);
            });
          else if (Array.isArray(t)) {
            var r,
              i = -1,
              o = t.length;
            if (null == n) for (; ++i < o; ) e.set(i, t[i]);
            else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r);
          } else if (t) for (var a in t) e.set(a, t[a]);
          return e;
        }
        u.prototype = s.prototype = {
          constructor: u,
          has: function (t) {
            return a + t in this;
          },
          get: function (t) {
            return this[a + t];
          },
          set: function (t, n) {
            return (this[a + t] = n), this;
          },
          remove: function (t) {
            var n = a + t;
            return n in this && delete this[n];
          },
          clear: function () {
            for (var t in this) t[0] === a && delete this[t];
          },
          keys: function () {
            var t = [];
            for (var n in this) n[0] === a && t.push(n.slice(1));
            return t;
          },
          values: function () {
            var t = [];
            for (var n in this) n[0] === a && t.push(this[n]);
            return t;
          },
          entries: function () {
            var t = [];
            for (var n in this)
              n[0] === a && t.push({ key: n.slice(1), value: this[n] });
            return t;
          },
          size: function () {
            var t = 0;
            for (var n in this) n[0] === a && ++t;
            return t;
          },
          empty: function () {
            for (var t in this) if (t[0] === a) return !1;
            return !0;
          },
          each: function (t) {
            for (var n in this) n[0] === a && t(this[n], n.slice(1), this);
          },
        };
        const c = s;
        function l() {}
        var f = c.prototype;
        l.prototype = function (t, n) {
          var e = new l();
          if (t instanceof l)
            t.each(function (t) {
              e.add(t);
            });
          else if (t) {
            var r = -1,
              i = t.length;
            if (null == n) for (; ++r < i; ) e.add(t[r]);
            else for (; ++r < i; ) e.add(n(t[r], r, t));
          }
          return e;
        }.prototype = {
          constructor: l,
          has: f.has,
          add: function (t) {
            return (this[a + (t += "")] = t), this;
          },
          remove: f.remove,
          clear: f.clear,
          values: f.keys,
          size: f.size,
          empty: f.empty,
          each: f.each,
        };
        var h = Array.prototype,
          p = h.map,
          d = h.slice,
          v = { name: "implicit" };
        function g() {
          var t = c(),
            n = [],
            e = [],
            r = v;
          function o(i) {
            var o = i + "",
              a = t.get(o);
            if (!a) {
              if (r !== v) return r;
              t.set(o, (a = n.push(i)));
            }
            return e[(a - 1) % e.length];
          }
          return (
            (o.domain = function (e) {
              if (!arguments.length) return n.slice();
              (n = []), (t = c());
              for (var r, i, a = -1, u = e.length; ++a < u; )
                t.has((i = (r = e[a]) + "")) || t.set(i, n.push(r));
              return o;
            }),
            (o.range = function (t) {
              return arguments.length ? ((e = d.call(t)), o) : e.slice();
            }),
            (o.unknown = function (t) {
              return arguments.length ? ((r = t), o) : r;
            }),
            (o.copy = function () {
              return g(n, e).unknown(r);
            }),
            i.apply(o, arguments),
            o
          );
        }
        function y() {
          var t,
            n,
            e = g().unknown(void 0),
            o = e.domain,
            a = e.range,
            u = [0, 1],
            s = !1,
            c = 0,
            l = 0,
            f = 0.5;
          function h() {
            var e = o().length,
              i = u[1] < u[0],
              h = u[i - 0],
              p = u[1 - i];
            (t = (p - h) / Math.max(1, e - c + 2 * l)),
              s && (t = Math.floor(t)),
              (h += (p - h - t * (e - c)) * f),
              (n = t * (1 - c)),
              s && ((h = Math.round(h)), (n = Math.round(n)));
            var d = (0, r.range)(e).map(function (n) {
              return h + t * n;
            });
            return a(i ? d.reverse() : d);
          }
          return (
            delete e.unknown,
            (e.domain = function (t) {
              return arguments.length ? (o(t), h()) : o();
            }),
            (e.range = function (t) {
              return arguments.length ? ((u = [+t[0], +t[1]]), h()) : u.slice();
            }),
            (e.rangeRound = function (t) {
              return (u = [+t[0], +t[1]]), (s = !0), h();
            }),
            (e.bandwidth = function () {
              return n;
            }),
            (e.step = function () {
              return t;
            }),
            (e.round = function (t) {
              return arguments.length ? ((s = !!t), h()) : s;
            }),
            (e.padding = function (t) {
              return arguments.length ? ((c = Math.min(1, (l = +t))), h()) : c;
            }),
            (e.paddingInner = function (t) {
              return arguments.length ? ((c = Math.min(1, t)), h()) : c;
            }),
            (e.paddingOuter = function (t) {
              return arguments.length ? ((l = +t), h()) : l;
            }),
            (e.align = function (t) {
              return arguments.length
                ? ((f = Math.max(0, Math.min(1, t))), h())
                : f;
            }),
            (e.copy = function () {
              return y(o(), u)
                .round(s)
                .paddingInner(c)
                .paddingOuter(l)
                .align(f);
            }),
            i.apply(h(), arguments)
          );
        }
        function _(t) {
          var n = t.copy;
          return (
            (t.padding = t.paddingOuter),
            delete t.paddingInner,
            delete t.paddingOuter,
            (t.copy = function () {
              return _(n());
            }),
            t
          );
        }
        function x() {
          return _(y.apply(null, arguments).paddingInner(1));
        }
        var m = e(372);
        function b(t, n, e, r, i) {
          var o = t * t,
            a = o * t;
          return (
            ((1 - 3 * t + 3 * o - a) * n +
              (4 - 6 * o + 3 * a) * e +
              (1 + 3 * t + 3 * o - 3 * a) * r +
              a * i) /
            6
          );
        }
        function w(t) {
          return function () {
            return t;
          };
        }
        function A(t, n) {
          var e = n - t;
          return e
            ? (function (t, n) {
                return function (e) {
                  return t + e * n;
                };
              })(t, e)
            : w(isNaN(t) ? n : t);
        }
        const S = (function t(n) {
          var e = (function (t) {
            return 1 == (t = +t)
              ? A
              : function (n, e) {
                  return e - n
                    ? (function (t, n, e) {
                        return (
                          (t = Math.pow(t, e)),
                          (n = Math.pow(n, e) - t),
                          (e = 1 / e),
                          function (r) {
                            return Math.pow(t + r * n, e);
                          }
                        );
                      })(n, e, t)
                    : w(isNaN(n) ? e : n);
                };
          })(n);
          function r(t, n) {
            var r = e((t = (0, m.B8)(t)).r, (n = (0, m.B8)(n)).r),
              i = e(t.g, n.g),
              o = e(t.b, n.b),
              a = A(t.opacity, n.opacity);
            return function (n) {
              return (
                (t.r = r(n)),
                (t.g = i(n)),
                (t.b = o(n)),
                (t.opacity = a(n)),
                t + ""
              );
            };
          }
          return (r.gamma = t), r;
        })(1);
        function M(t) {
          return function (n) {
            var e,
              r,
              i = n.length,
              o = new Array(i),
              a = new Array(i),
              u = new Array(i);
            for (e = 0; e < i; ++e)
              (r = (0, m.B8)(n[e])),
                (o[e] = r.r || 0),
                (a[e] = r.g || 0),
                (u[e] = r.b || 0);
            return (
              (o = t(o)),
              (a = t(a)),
              (u = t(u)),
              (r.opacity = 1),
              function (t) {
                return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
              }
            );
          };
        }
        function T(t, n) {
          var e,
            r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            a = new Array(r);
          for (e = 0; e < i; ++e) o[e] = C(t[e], n[e]);
          for (; e < r; ++e) a[e] = n[e];
          return function (t) {
            for (e = 0; e < i; ++e) a[e] = o[e](t);
            return a;
          };
        }
        function O(t, n) {
          var e = new Date();
          return (
            (t = +t),
            (n = +n),
            function (r) {
              return e.setTime(t * (1 - r) + n * r), e;
            }
          );
        }
        function k(t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return t * (1 - e) + n * e;
            }
          );
        }
        function N(t, n) {
          var e,
            r = {},
            i = {};
          for (e in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== n && "object" == typeof n) || (n = {}),
          n))
            e in t ? (r[e] = C(t[e], n[e])) : (i[e] = n[e]);
          return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        }
        M(function (t) {
          var n = t.length - 1;
          return function (e) {
            var r =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              i = t[r],
              o = t[r + 1],
              a = r > 0 ? t[r - 1] : 2 * i - o,
              u = r < n - 1 ? t[r + 2] : 2 * o - i;
            return b((e - r / n) * n, a, i, o, u);
          };
        }),
          M(function (t) {
            var n = t.length;
            return function (e) {
              var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                u = t[(r + 2) % n];
              return b((e - r / n) * n, i, o, a, u);
            };
          });
        var E = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          D = new RegExp(E.source, "g");
        function I(t, n) {
          var e,
            r,
            i,
            o = (E.lastIndex = D.lastIndex = 0),
            a = -1,
            u = [],
            s = [];
          for (t += "", n += ""; (e = E.exec(t)) && (r = D.exec(n)); )
            (i = r.index) > o &&
              ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
              (e = e[0]) === (r = r[0])
                ? u[a]
                  ? (u[a] += r)
                  : (u[++a] = r)
                : ((u[++a] = null), s.push({ i: a, x: k(e, r) })),
              (o = D.lastIndex);
          return (
            o < n.length &&
              ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
            u.length < 2
              ? s[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + "";
                    };
                  })(s[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(n)
              : ((n = s.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
                  return u.join("");
                })
          );
        }
        function j(t, n) {
          n || (n = []);
          var e,
            r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice();
          return function (o) {
            for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
            return i;
          };
        }
        function C(t, n) {
          var e,
            r,
            i = typeof n;
          return null == n || "boolean" === i
            ? w(n)
            : ("number" === i
                ? k
                : "string" === i
                ? (e = (0, m.ZP)(n))
                  ? ((n = e), S)
                  : I
                : n instanceof m.ZP
                ? S
                : n instanceof Date
                ? O
                : ((r = n),
                  !ArrayBuffer.isView(r) || r instanceof DataView
                    ? Array.isArray(n)
                      ? T
                      : ("function" != typeof n.valueOf &&
                          "function" != typeof n.toString) ||
                        isNaN(n)
                      ? N
                      : k
                    : j))(t, n);
        }
        function L(t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return Math.round(t * (1 - e) + n * e);
            }
          );
        }
        function B(t) {
          return +t;
        }
        var R = [0, 1];
        function P(t) {
          return t;
        }
        function z(t, n) {
          return (n -= t = +t)
            ? function (e) {
                return (e - t) / n;
              }
            : ((e = isNaN(n) ? NaN : 0.5),
              function () {
                return e;
              });
          var e;
        }
        function F(t) {
          var n,
            e = t[0],
            r = t[t.length - 1];
          return (
            e > r && ((n = e), (e = r), (r = n)),
            function (t) {
              return Math.max(e, Math.min(r, t));
            }
          );
        }
        function W(t, n, e) {
          var r = t[0],
            i = t[1],
            o = n[0],
            a = n[1];
          return (
            i < r
              ? ((r = z(i, r)), (o = e(a, o)))
              : ((r = z(r, i)), (o = e(o, a))),
            function (t) {
              return o(r(t));
            }
          );
        }
        function U(t, n, e) {
          var i = Math.min(t.length, n.length) - 1,
            o = new Array(i),
            a = new Array(i),
            u = -1;
          for (
            t[i] < t[0] &&
            ((t = t.slice().reverse()), (n = n.slice().reverse()));
            ++u < i;

          )
            (o[u] = z(t[u], t[u + 1])), (a[u] = e(n[u], n[u + 1]));
          return function (n) {
            var e = (0, r.bisect)(t, n, 1, i) - 1;
            return a[e](o[e](n));
          };
        }
        function H(t, n) {
          return n
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function Y() {
          var t,
            n,
            e,
            r,
            i,
            o,
            a = R,
            u = R,
            s = C,
            c = P;
          function l() {
            return (
              (r = Math.min(a.length, u.length) > 2 ? U : W), (i = o = null), f
            );
          }
          function f(n) {
            return isNaN((n = +n))
              ? e
              : (i || (i = r(a.map(t), u, s)))(t(c(n)));
          }
          return (
            (f.invert = function (e) {
              return c(n((o || (o = r(u, a.map(t), k)))(e)));
            }),
            (f.domain = function (t) {
              return arguments.length
                ? ((a = p.call(t, B)), c === P || (c = F(a)), l())
                : a.slice();
            }),
            (f.range = function (t) {
              return arguments.length ? ((u = d.call(t)), l()) : u.slice();
            }),
            (f.rangeRound = function (t) {
              return (u = d.call(t)), (s = L), l();
            }),
            (f.clamp = function (t) {
              return arguments.length ? ((c = t ? F(a) : P), f) : c !== P;
            }),
            (f.interpolate = function (t) {
              return arguments.length ? ((s = t), l()) : s;
            }),
            (f.unknown = function (t) {
              return arguments.length ? ((e = t), f) : e;
            }),
            function (e, r) {
              return (t = e), (n = r), l();
            }
          );
        }
        function q(t, n) {
          return Y()(t, n);
        }
        var Z,
          $ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function X(t) {
          if (!(n = $.exec(t))) throw new Error("invalid format: " + t);
          var n;
          return new G({
            fill: n[1],
            align: n[2],
            sign: n[3],
            symbol: n[4],
            zero: n[5],
            width: n[6],
            comma: n[7],
            precision: n[8] && n[8].slice(1),
            trim: n[9],
            type: n[10],
          });
        }
        function G(t) {
          (this.fill = void 0 === t.fill ? " " : t.fill + ""),
            (this.align = void 0 === t.align ? ">" : t.align + ""),
            (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
            (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
            (this.zero = !!t.zero),
            (this.width = void 0 === t.width ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = void 0 === t.precision ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = void 0 === t.type ? "" : t.type + "");
        }
        function V(t, n) {
          if (
            (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null;
          var e,
            r = t.slice(0, e);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
        }
        function K(t) {
          return (t = V(Math.abs(t))) ? t[1] : NaN;
        }
        function J(t, n) {
          var e = V(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
        }
        (X.prototype = G.prototype),
          (G.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? "0" : "") +
              (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
              (this.comma ? "," : "") +
              (void 0 === this.precision
                ? ""
                : "." + Math.max(0, 0 | this.precision)) +
              (this.trim ? "~" : "") +
              this.type
            );
          });
        const Q = {
          "%": function (t, n) {
            return (100 * t).toFixed(n);
          },
          b: function (t) {
            return Math.round(t).toString(2);
          },
          c: function (t) {
            return t + "";
          },
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: function (t, n) {
            return t.toExponential(n);
          },
          f: function (t, n) {
            return t.toFixed(n);
          },
          g: function (t, n) {
            return t.toPrecision(n);
          },
          o: function (t) {
            return Math.round(t).toString(8);
          },
          p: function (t, n) {
            return J(100 * t, n);
          },
          r: J,
          s: function (t, n) {
            var e = V(t, n);
            if (!e) return t + "";
            var r = e[0],
              i = e[1],
              o =
                i - (Z = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              a = r.length;
            return o === a
              ? r
              : o > a
              ? r + new Array(o - a + 1).join("0")
              : o > 0
              ? r.slice(0, o) + "." + r.slice(o)
              : "0." +
                new Array(1 - o).join("0") +
                V(t, Math.max(0, n + o - 1))[0];
          },
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
          },
          x: function (t) {
            return Math.round(t).toString(16);
          },
        };
        function tt(t) {
          return t;
        }
        var nt,
          et,
          rt,
          it = Array.prototype.map,
          ot = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "µ",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function at(t, n, e, i) {
          var o,
            a = (0, r.tickStep)(t, n, e);
          switch ((i = X(null == i ? ",f" : i)).type) {
            case "s":
              var u = Math.max(Math.abs(t), Math.abs(n));
              return (
                null != i.precision ||
                  isNaN(
                    (o = (function (t, n) {
                      return Math.max(
                        0,
                        3 * Math.max(-8, Math.min(8, Math.floor(K(n) / 3))) -
                          K(Math.abs(t))
                      );
                    })(a, u))
                  ) ||
                  (i.precision = o),
                rt(i, u)
              );
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != i.precision ||
                isNaN(
                  (o = (function (t, n) {
                    return (
                      (t = Math.abs(t)),
                      (n = Math.abs(n) - t),
                      Math.max(0, K(n) - K(t)) + 1
                    );
                  })(a, Math.max(Math.abs(t), Math.abs(n))))
                ) ||
                (i.precision = o - ("e" === i.type));
              break;
            case "f":
            case "%":
              null != i.precision ||
                isNaN(
                  (o = (function (t) {
                    return Math.max(0, -K(Math.abs(t)));
                  })(a))
                ) ||
                (i.precision = o - 2 * ("%" === i.type));
          }
          return et(i);
        }
        function ut(t) {
          var n = t.domain;
          return (
            (t.ticks = function (t) {
              var e = n();
              return (0, r.ticks)(e[0], e[e.length - 1], null == t ? 10 : t);
            }),
            (t.tickFormat = function (t, e) {
              var r = n();
              return at(r[0], r[r.length - 1], null == t ? 10 : t, e);
            }),
            (t.nice = function (e) {
              null == e && (e = 10);
              var i,
                o = n(),
                a = 0,
                u = o.length - 1,
                s = o[a],
                c = o[u];
              return (
                c < s && ((i = s), (s = c), (c = i), (i = a), (a = u), (u = i)),
                (i = (0, r.tickIncrement)(s, c, e)) > 0
                  ? ((s = Math.floor(s / i) * i),
                    (c = Math.ceil(c / i) * i),
                    (i = (0, r.tickIncrement)(s, c, e)))
                  : i < 0 &&
                    ((s = Math.ceil(s * i) / i),
                    (c = Math.floor(c * i) / i),
                    (i = (0, r.tickIncrement)(s, c, e))),
                i > 0
                  ? ((o[a] = Math.floor(s / i) * i),
                    (o[u] = Math.ceil(c / i) * i),
                    n(o))
                  : i < 0 &&
                    ((o[a] = Math.ceil(s * i) / i),
                    (o[u] = Math.floor(c * i) / i),
                    n(o)),
                t
              );
            }),
            t
          );
        }
        function st() {
          var t = q(P, P);
          return (
            (t.copy = function () {
              return H(t, st());
            }),
            i.apply(t, arguments),
            ut(t)
          );
        }
        function ct(t) {
          var n;
          function e(t) {
            return isNaN((t = +t)) ? n : t;
          }
          return (
            (e.invert = e),
            (e.domain = e.range = function (n) {
              return arguments.length ? ((t = p.call(n, B)), e) : t.slice();
            }),
            (e.unknown = function (t) {
              return arguments.length ? ((n = t), e) : n;
            }),
            (e.copy = function () {
              return ct(t).unknown(n);
            }),
            (t = arguments.length ? p.call(t, B) : [0, 1]),
            ut(e)
          );
        }
        function lt(t, n) {
          var e,
            r = 0,
            i = (t = t.slice()).length - 1,
            o = t[r],
            a = t[i];
          return (
            a < o && ((e = r), (r = i), (i = e), (e = o), (o = a), (a = e)),
            (t[r] = n.floor(o)),
            (t[i] = n.ceil(a)),
            t
          );
        }
        function ft(t) {
          return Math.log(t);
        }
        function ht(t) {
          return Math.exp(t);
        }
        function pt(t) {
          return -Math.log(-t);
        }
        function dt(t) {
          return -Math.exp(-t);
        }
        function vt(t) {
          return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
        }
        function gt(t) {
          return function (n) {
            return -t(-n);
          };
        }
        function yt(t) {
          var n,
            e,
            i = t(ft, ht),
            o = i.domain,
            a = 10;
          function u() {
            return (
              (n = (function (t) {
                return t === Math.E
                  ? Math.log
                  : (10 === t && Math.log10) ||
                      (2 === t && Math.log2) ||
                      ((t = Math.log(t)),
                      function (n) {
                        return Math.log(n) / t;
                      });
              })(a)),
              (e = (function (t) {
                return 10 === t
                  ? vt
                  : t === Math.E
                  ? Math.exp
                  : function (n) {
                      return Math.pow(t, n);
                    };
              })(a)),
              o()[0] < 0 ? ((n = gt(n)), (e = gt(e)), t(pt, dt)) : t(ft, ht),
              i
            );
          }
          return (
            (i.base = function (t) {
              return arguments.length ? ((a = +t), u()) : a;
            }),
            (i.domain = function (t) {
              return arguments.length ? (o(t), u()) : o();
            }),
            (i.ticks = function (t) {
              var i,
                u = o(),
                s = u[0],
                c = u[u.length - 1];
              (i = c < s) && ((p = s), (s = c), (c = p));
              var l,
                f,
                h,
                p = n(s),
                d = n(c),
                v = null == t ? 10 : +t,
                g = [];
              if (!(a % 1) && d - p < v) {
                if (((p = Math.round(p) - 1), (d = Math.round(d) + 1), s > 0)) {
                  for (; p < d; ++p)
                    for (f = 1, l = e(p); f < a; ++f)
                      if (!((h = l * f) < s)) {
                        if (h > c) break;
                        g.push(h);
                      }
                } else
                  for (; p < d; ++p)
                    for (f = a - 1, l = e(p); f >= 1; --f)
                      if (!((h = l * f) < s)) {
                        if (h > c) break;
                        g.push(h);
                      }
              } else g = (0, r.ticks)(p, d, Math.min(d - p, v)).map(e);
              return i ? g.reverse() : g;
            }),
            (i.tickFormat = function (t, r) {
              if (
                (null == r && (r = 10 === a ? ".0e" : ","),
                "function" != typeof r && (r = et(r)),
                t === 1 / 0)
              )
                return r;
              null == t && (t = 10);
              var o = Math.max(1, (a * t) / i.ticks().length);
              return function (t) {
                var i = t / e(Math.round(n(t)));
                return i * a < a - 0.5 && (i *= a), i <= o ? r(t) : "";
              };
            }),
            (i.nice = function () {
              return o(
                lt(o(), {
                  floor: function (t) {
                    return e(Math.floor(n(t)));
                  },
                  ceil: function (t) {
                    return e(Math.ceil(n(t)));
                  },
                })
              );
            }),
            i
          );
        }
        function _t() {
          var t = yt(Y()).domain([1, 10]);
          return (
            (t.copy = function () {
              return H(t, _t()).base(t.base());
            }),
            i.apply(t, arguments),
            t
          );
        }
        function xt(t) {
          return function (n) {
            return Math.sign(n) * Math.log1p(Math.abs(n / t));
          };
        }
        function mt(t) {
          return function (n) {
            return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
          };
        }
        function bt(t) {
          var n = 1,
            e = t(xt(n), mt(n));
          return (
            (e.constant = function (e) {
              return arguments.length ? t(xt((n = +e)), mt(n)) : n;
            }),
            ut(e)
          );
        }
        function wt() {
          var t = bt(Y());
          return (
            (t.copy = function () {
              return H(t, wt()).constant(t.constant());
            }),
            i.apply(t, arguments)
          );
        }
        function At(t) {
          return function (n) {
            return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
          };
        }
        function St(t) {
          return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
        }
        function Mt(t) {
          return t < 0 ? -t * t : t * t;
        }
        function Tt(t) {
          var n = t(P, P),
            e = 1;
          function r() {
            return 1 === e
              ? t(P, P)
              : 0.5 === e
              ? t(St, Mt)
              : t(At(e), At(1 / e));
          }
          return (
            (n.exponent = function (t) {
              return arguments.length ? ((e = +t), r()) : e;
            }),
            ut(n)
          );
        }
        function Ot() {
          var t = Tt(Y());
          return (
            (t.copy = function () {
              return H(t, Ot()).exponent(t.exponent());
            }),
            i.apply(t, arguments),
            t
          );
        }
        function kt() {
          return Ot.apply(null, arguments).exponent(0.5);
        }
        function Nt() {
          var t,
            n = [],
            e = [],
            o = [];
          function a() {
            var t = 0,
              i = Math.max(1, e.length);
            for (o = new Array(i - 1); ++t < i; )
              o[t - 1] = (0, r.quantile)(n, t / i);
            return u;
          }
          function u(n) {
            return isNaN((n = +n)) ? t : e[(0, r.bisect)(o, n)];
          }
          return (
            (u.invertExtent = function (t) {
              var r = e.indexOf(t);
              return r < 0
                ? [NaN, NaN]
                : [
                    r > 0 ? o[r - 1] : n[0],
                    r < o.length ? o[r] : n[n.length - 1],
                  ];
            }),
            (u.domain = function (t) {
              if (!arguments.length) return n.slice();
              n = [];
              for (var e, i = 0, o = t.length; i < o; ++i)
                null == (e = t[i]) || isNaN((e = +e)) || n.push(e);
              return n.sort(r.ascending), a();
            }),
            (u.range = function (t) {
              return arguments.length ? ((e = d.call(t)), a()) : e.slice();
            }),
            (u.unknown = function (n) {
              return arguments.length ? ((t = n), u) : t;
            }),
            (u.quantiles = function () {
              return o.slice();
            }),
            (u.copy = function () {
              return Nt().domain(n).range(e).unknown(t);
            }),
            i.apply(u, arguments)
          );
        }
        function Et() {
          var t,
            n = 0,
            e = 1,
            o = 1,
            a = [0.5],
            u = [0, 1];
          function s(n) {
            return n <= n ? u[(0, r.bisect)(a, n, 0, o)] : t;
          }
          function c() {
            var t = -1;
            for (a = new Array(o); ++t < o; )
              a[t] = ((t + 1) * e - (t - o) * n) / (o + 1);
            return s;
          }
          return (
            (s.domain = function (t) {
              return arguments.length
                ? ((n = +t[0]), (e = +t[1]), c())
                : [n, e];
            }),
            (s.range = function (t) {
              return arguments.length
                ? ((o = (u = d.call(t)).length - 1), c())
                : u.slice();
            }),
            (s.invertExtent = function (t) {
              var r = u.indexOf(t);
              return r < 0
                ? [NaN, NaN]
                : r < 1
                ? [n, a[0]]
                : r >= o
                ? [a[o - 1], e]
                : [a[r - 1], a[r]];
            }),
            (s.unknown = function (n) {
              return arguments.length ? ((t = n), s) : s;
            }),
            (s.thresholds = function () {
              return a.slice();
            }),
            (s.copy = function () {
              return Et().domain([n, e]).range(u).unknown(t);
            }),
            i.apply(ut(s), arguments)
          );
        }
        function Dt() {
          var t,
            n = [0.5],
            e = [0, 1],
            o = 1;
          function a(i) {
            return i <= i ? e[(0, r.bisect)(n, i, 0, o)] : t;
          }
          return (
            (a.domain = function (t) {
              return arguments.length
                ? ((n = d.call(t)), (o = Math.min(n.length, e.length - 1)), a)
                : n.slice();
            }),
            (a.range = function (t) {
              return arguments.length
                ? ((e = d.call(t)), (o = Math.min(n.length, e.length - 1)), a)
                : e.slice();
            }),
            (a.invertExtent = function (t) {
              var r = e.indexOf(t);
              return [n[r - 1], n[r]];
            }),
            (a.unknown = function (n) {
              return arguments.length ? ((t = n), a) : t;
            }),
            (a.copy = function () {
              return Dt().domain(n).range(e).unknown(t);
            }),
            i.apply(a, arguments)
          );
        }
        (nt = (function (t) {
          var n,
            e,
            r =
              void 0 === t.grouping || void 0 === t.thousands
                ? tt
                : ((n = it.call(t.grouping, Number)),
                  (e = t.thousands + ""),
                  function (t, r) {
                    for (
                      var i = t.length, o = [], a = 0, u = n[0], s = 0;
                      i > 0 &&
                      u > 0 &&
                      (s + u + 1 > r && (u = Math.max(1, r - s)),
                      o.push(t.substring((i -= u), i + u)),
                      !((s += u + 1) > r));

                    )
                      u = n[(a = (a + 1) % n.length)];
                    return o.reverse().join(e);
                  }),
            i = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            a = void 0 === t.decimal ? "." : t.decimal + "",
            u =
              void 0 === t.numerals
                ? tt
                : (function (t) {
                    return function (n) {
                      return n.replace(/[0-9]/g, function (n) {
                        return t[+n];
                      });
                    };
                  })(it.call(t.numerals, String)),
            s = void 0 === t.percent ? "%" : t.percent + "",
            c = void 0 === t.minus ? "-" : t.minus + "",
            l = void 0 === t.nan ? "NaN" : t.nan + "";
          function f(t) {
            var n = (t = X(t)).fill,
              e = t.align,
              f = t.sign,
              h = t.symbol,
              p = t.zero,
              d = t.width,
              v = t.comma,
              g = t.precision,
              y = t.trim,
              _ = t.type;
            "n" === _
              ? ((v = !0), (_ = "g"))
              : Q[_] || (void 0 === g && (g = 12), (y = !0), (_ = "g")),
              (p || ("0" === n && "=" === e)) &&
                ((p = !0), (n = "0"), (e = "="));
            var x =
                "$" === h
                  ? i
                  : "#" === h && /[boxX]/.test(_)
                  ? "0" + _.toLowerCase()
                  : "",
              m = "$" === h ? o : /[%p]/.test(_) ? s : "",
              b = Q[_],
              w = /[defgprs%]/.test(_);
            function A(t) {
              var i,
                o,
                s,
                h = x,
                A = m;
              if ("c" === _) (A = b(t) + A), (t = "");
              else {
                var S = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? l : b(Math.abs(t), g)),
                  y &&
                    (t = (function (t) {
                      t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                        switch (t[r]) {
                          case ".":
                            i = n = r;
                            break;
                          case "0":
                            0 === i && (i = r), (n = r);
                            break;
                          default:
                            if (!+t[r]) break t;
                            i > 0 && (i = 0);
                        }
                      return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                    })(t)),
                  S && 0 == +t && "+" !== f && (S = !1),
                  (h =
                    (S
                      ? "(" === f
                        ? f
                        : c
                      : "-" === f || "(" === f
                      ? ""
                      : f) + h),
                  (A =
                    ("s" === _ ? ot[8 + Z / 3] : "") +
                    A +
                    (S && "(" === f ? ")" : "")),
                  w)
                )
                  for (i = -1, o = t.length; ++i < o; )
                    if (48 > (s = t.charCodeAt(i)) || s > 57) {
                      (A = (46 === s ? a + t.slice(i + 1) : t.slice(i)) + A),
                        (t = t.slice(0, i));
                      break;
                    }
              }
              v && !p && (t = r(t, 1 / 0));
              var M = h.length + t.length + A.length,
                T = M < d ? new Array(d - M + 1).join(n) : "";
              switch (
                (v &&
                  p &&
                  ((t = r(T + t, T.length ? d - A.length : 1 / 0)), (T = "")),
                e)
              ) {
                case "<":
                  t = h + t + A + T;
                  break;
                case "=":
                  t = h + T + t + A;
                  break;
                case "^":
                  t = T.slice(0, (M = T.length >> 1)) + h + t + A + T.slice(M);
                  break;
                default:
                  t = T + h + t + A;
              }
              return u(t);
            }
            return (
              (g =
                void 0 === g
                  ? 6
                  : /[gprs]/.test(_)
                  ? Math.max(1, Math.min(21, g))
                  : Math.max(0, Math.min(20, g))),
              (A.toString = function () {
                return t + "";
              }),
              A
            );
          }
          return {
            format: f,
            formatPrefix: function (t, n) {
              var e = f((((t = X(t)).type = "f"), t)),
                r = 3 * Math.max(-8, Math.min(8, Math.floor(K(n) / 3))),
                i = Math.pow(10, -r),
                o = ot[8 + r / 3];
              return function (t) {
                return e(i * t) + o;
              };
            },
          };
        })({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""],
          minus: "-",
        })),
          (et = nt.format),
          (rt = nt.formatPrefix);
        var It = e(209),
          jt = e(829),
          Ct = (0, jt.Z)(
            function (t) {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setMonth(t.getMonth() + n);
            },
            function (t, n) {
              return (
                n.getMonth() -
                t.getMonth() +
                12 * (n.getFullYear() - t.getFullYear())
              );
            },
            function (t) {
              return t.getMonth();
            }
          );
        const Lt = Ct;
        Ct.range;
        var Bt = e(776),
          Rt = e(478),
          Pt = e(222),
          zt = (0, jt.Z)(
            function (t) {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * Pt.Ym -
                  t.getMinutes() * Pt.yB
              );
            },
            function (t, n) {
              t.setTime(+t + n * Pt.Y2);
            },
            function (t, n) {
              return (n - t) / Pt.Y2;
            },
            function (t) {
              return t.getHours();
            }
          );
        const Ft = zt;
        zt.range;
        var Wt = (0, jt.Z)(
          function (t) {
            t.setTime(t - t.getMilliseconds() - t.getSeconds() * Pt.Ym);
          },
          function (t, n) {
            t.setTime(+t + n * Pt.yB);
          },
          function (t, n) {
            return (n - t) / Pt.yB;
          },
          function (t) {
            return t.getMinutes();
          }
        );
        const Ut = Wt;
        Wt.range;
        var Ht = (0, jt.Z)(
          function (t) {
            t.setTime(t - t.getMilliseconds());
          },
          function (t, n) {
            t.setTime(+t + n * Pt.Ym);
          },
          function (t, n) {
            return (n - t) / Pt.Ym;
          },
          function (t) {
            return t.getUTCSeconds();
          }
        );
        const Yt = Ht;
        Ht.range;
        var qt = (0, jt.Z)(
          function () {},
          function (t, n) {
            t.setTime(+t + n);
          },
          function (t, n) {
            return n - t;
          }
        );
        qt.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? (0, jt.Z)(
                    function (n) {
                      n.setTime(Math.floor(n / t) * t);
                    },
                    function (n, e) {
                      n.setTime(+n + e * t);
                    },
                    function (n, e) {
                      return (e - n) / t;
                    }
                  )
                : qt
              : null
          );
        };
        const Zt = qt;
        qt.range;
        var $t = e(317),
          Xt = 31536e6;
        function Gt(t) {
          return new Date(t);
        }
        function Vt(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }
        function Kt(t, n, e, i, o, a, u, s, c) {
          var l = q(P, P),
            f = l.invert,
            h = l.domain,
            d = c(".%L"),
            v = c(":%S"),
            g = c("%I:%M"),
            y = c("%I %p"),
            _ = c("%a %d"),
            x = c("%b %d"),
            m = c("%B"),
            b = c("%Y"),
            w = [
              [u, 1, 1e3],
              [u, 5, 5e3],
              [u, 15, 15e3],
              [u, 30, 3e4],
              [a, 1, 6e4],
              [a, 5, 3e5],
              [a, 15, 9e5],
              [a, 30, 18e5],
              [o, 1, 36e5],
              [o, 3, 108e5],
              [o, 6, 216e5],
              [o, 12, 432e5],
              [i, 1, 864e5],
              [i, 2, 1728e5],
              [e, 1, 6048e5],
              [n, 1, 2592e6],
              [n, 3, 7776e6],
              [t, 1, Xt],
            ];
          function A(r) {
            return (u(r) < r
              ? d
              : a(r) < r
              ? v
              : o(r) < r
              ? g
              : i(r) < r
              ? y
              : n(r) < r
              ? e(r) < r
                ? _
                : x
              : t(r) < r
              ? m
              : b)(r);
          }
          function S(n, e, i, o) {
            if ((null == n && (n = 10), "number" == typeof n)) {
              var a = Math.abs(i - e) / n,
                u = (0, r.bisector)(function (t) {
                  return t[2];
                }).right(w, a);
              u === w.length
                ? ((o = (0, r.tickStep)(e / Xt, i / Xt, n)), (n = t))
                : u
                ? ((o = (u = w[a / w[u - 1][2] < w[u][2] / a ? u - 1 : u])[1]),
                  (n = u[0]))
                : ((o = Math.max((0, r.tickStep)(e, i, n), 1)), (n = s));
            }
            return null == o ? n : n.every(o);
          }
          return (
            (l.invert = function (t) {
              return new Date(f(t));
            }),
            (l.domain = function (t) {
              return arguments.length ? h(p.call(t, Vt)) : h().map(Gt);
            }),
            (l.ticks = function (t, n) {
              var e,
                r = h(),
                i = r[0],
                o = r[r.length - 1],
                a = o < i;
              return (
                a && ((e = i), (i = o), (o = e)),
                (e = (e = S(t, i, o, n)) ? e.range(i, o + 1) : []),
                a ? e.reverse() : e
              );
            }),
            (l.tickFormat = function (t, n) {
              return null == n ? A : c(n);
            }),
            (l.nice = function (t, n) {
              var e = h();
              return (t = S(t, e[0], e[e.length - 1], n)) ? h(lt(e, t)) : l;
            }),
            (l.copy = function () {
              return H(l, Kt(t, n, e, i, o, a, u, s, c));
            }),
            l
          );
        }
        function Jt() {
          return i.apply(
            Kt(It.Z, Lt, Bt.OM, Rt.Z, Ft, Ut, Yt, Zt, $t.i$).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments
          );
        }
        var Qt = e(181),
          tn = (0, jt.Z)(
            function (t) {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setUTCMonth(t.getUTCMonth() + n);
            },
            function (t, n) {
              return (
                n.getUTCMonth() -
                t.getUTCMonth() +
                12 * (n.getUTCFullYear() - t.getUTCFullYear())
              );
            },
            function (t) {
              return t.getUTCMonth();
            }
          );
        const nn = tn;
        tn.range;
        var en = e(326),
          rn = e(692),
          on = (0, jt.Z)(
            function (t) {
              t.setUTCMinutes(0, 0, 0);
            },
            function (t, n) {
              t.setTime(+t + n * Pt.Y2);
            },
            function (t, n) {
              return (n - t) / Pt.Y2;
            },
            function (t) {
              return t.getUTCHours();
            }
          );
        const an = on;
        on.range;
        var un = (0, jt.Z)(
          function (t) {
            t.setUTCSeconds(0, 0);
          },
          function (t, n) {
            t.setTime(+t + n * Pt.yB);
          },
          function (t, n) {
            return (n - t) / Pt.yB;
          },
          function (t) {
            return t.getUTCMinutes();
          }
        );
        const sn = un;
        function cn() {
          return i.apply(
            Kt(Qt.Z, nn, en.Ox, rn.Z, an, sn, Yt, Zt, $t.g0).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ]),
            arguments
          );
        }
        function ln() {
          var t,
            n,
            e,
            r,
            i,
            o = 0,
            a = 1,
            u = P,
            s = !1;
          function c(n) {
            return isNaN((n = +n))
              ? i
              : u(
                  0 === e
                    ? 0.5
                    : ((n = (r(n) - t) * e),
                      s ? Math.max(0, Math.min(1, n)) : n)
                );
          }
          return (
            (c.domain = function (i) {
              return arguments.length
                ? ((t = r((o = +i[0]))),
                  (n = r((a = +i[1]))),
                  (e = t === n ? 0 : 1 / (n - t)),
                  c)
                : [o, a];
            }),
            (c.clamp = function (t) {
              return arguments.length ? ((s = !!t), c) : s;
            }),
            (c.interpolator = function (t) {
              return arguments.length ? ((u = t), c) : u;
            }),
            (c.unknown = function (t) {
              return arguments.length ? ((i = t), c) : i;
            }),
            function (i) {
              return (
                (r = i),
                (t = i(o)),
                (n = i(a)),
                (e = t === n ? 0 : 1 / (n - t)),
                c
              );
            }
          );
        }
        function fn(t, n) {
          return n
            .domain(t.domain())
            .interpolator(t.interpolator())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function hn() {
          var t = ut(ln()(P));
          return (
            (t.copy = function () {
              return fn(t, hn());
            }),
            o.apply(t, arguments)
          );
        }
        function pn() {
          var t = yt(ln()).domain([1, 10]);
          return (
            (t.copy = function () {
              return fn(t, pn()).base(t.base());
            }),
            o.apply(t, arguments)
          );
        }
        function dn() {
          var t = bt(ln());
          return (
            (t.copy = function () {
              return fn(t, dn()).constant(t.constant());
            }),
            o.apply(t, arguments)
          );
        }
        function vn() {
          var t = Tt(ln());
          return (
            (t.copy = function () {
              return fn(t, vn()).exponent(t.exponent());
            }),
            o.apply(t, arguments)
          );
        }
        function gn() {
          return vn.apply(null, arguments).exponent(0.5);
        }
        function yn() {
          var t = [],
            n = P;
          function e(e) {
            if (!isNaN((e = +e)))
              return n(((0, r.bisect)(t, e) - 1) / (t.length - 1));
          }
          return (
            (e.domain = function (n) {
              if (!arguments.length) return t.slice();
              t = [];
              for (var i, o = 0, a = n.length; o < a; ++o)
                null == (i = n[o]) || isNaN((i = +i)) || t.push(i);
              return t.sort(r.ascending), e;
            }),
            (e.interpolator = function (t) {
              return arguments.length ? ((n = t), e) : n;
            }),
            (e.copy = function () {
              return yn(n).domain(t);
            }),
            o.apply(e, arguments)
          );
        }
        function _n() {
          var t,
            n,
            e,
            r,
            i,
            o,
            a,
            u = 0,
            s = 0.5,
            c = 1,
            l = P,
            f = !1;
          function h(t) {
            return isNaN((t = +t))
              ? a
              : ((t = 0.5 + ((t = +o(t)) - n) * (t < n ? r : i)),
                l(f ? Math.max(0, Math.min(1, t)) : t));
          }
          return (
            (h.domain = function (a) {
              return arguments.length
                ? ((t = o((u = +a[0]))),
                  (n = o((s = +a[1]))),
                  (e = o((c = +a[2]))),
                  (r = t === n ? 0 : 0.5 / (n - t)),
                  (i = n === e ? 0 : 0.5 / (e - n)),
                  h)
                : [u, s, c];
            }),
            (h.clamp = function (t) {
              return arguments.length ? ((f = !!t), h) : f;
            }),
            (h.interpolator = function (t) {
              return arguments.length ? ((l = t), h) : l;
            }),
            (h.unknown = function (t) {
              return arguments.length ? ((a = t), h) : a;
            }),
            function (a) {
              return (
                (o = a),
                (t = a(u)),
                (n = a(s)),
                (e = a(c)),
                (r = t === n ? 0 : 0.5 / (n - t)),
                (i = n === e ? 0 : 0.5 / (e - n)),
                h
              );
            }
          );
        }
        function xn() {
          var t = ut(_n()(P));
          return (
            (t.copy = function () {
              return fn(t, xn());
            }),
            o.apply(t, arguments)
          );
        }
        function mn() {
          var t = yt(_n()).domain([0.1, 1, 10]);
          return (
            (t.copy = function () {
              return fn(t, mn()).base(t.base());
            }),
            o.apply(t, arguments)
          );
        }
        function bn() {
          var t = bt(_n());
          return (
            (t.copy = function () {
              return fn(t, bn()).constant(t.constant());
            }),
            o.apply(t, arguments)
          );
        }
        function wn() {
          var t = Tt(_n());
          return (
            (t.copy = function () {
              return fn(t, wn()).exponent(t.exponent());
            }),
            o.apply(t, arguments)
          );
        }
        function An() {
          return wn.apply(null, arguments).exponent(0.5);
        }
        un.range;
      },
      297: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            clientPoint: () => mt,
            create: () => vt,
            creator: () => s,
            customEvent: () => at,
            event: () => tt,
            local: () => yt,
            matcher: () => p,
            mouse: () => bt,
            namespace: () => o,
            namespaces: () => i,
            select: () => dt,
            selectAll: () => wt,
            selection: () => pt,
            selector: () => l,
            selectorAll: () => h,
            style: () => N,
            touch: () => At,
            touches: () => St,
            window: () => M,
          });
        var r = "http://www.w3.org/1999/xhtml";
        const i = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: r,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
        function o(t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            i.hasOwnProperty(n) ? { space: i[n], local: t } : t
          );
        }
        function a(t) {
          return function () {
            var n = this.ownerDocument,
              e = this.namespaceURI;
            return e === r && n.documentElement.namespaceURI === r
              ? n.createElement(t)
              : n.createElementNS(e, t);
          };
        }
        function u(t) {
          return function () {
            return this.ownerDocument.createElementNS(t.space, t.local);
          };
        }
        function s(t) {
          var n = o(t);
          return (n.local ? u : a)(n);
        }
        function c() {}
        function l(t) {
          return null == t
            ? c
            : function () {
                return this.querySelector(t);
              };
        }
        function f() {
          return [];
        }
        function h(t) {
          return null == t
            ? f
            : function () {
                return this.querySelectorAll(t);
              };
        }
        function p(t) {
          return function () {
            return this.matches(t);
          };
        }
        function d(t) {
          return new Array(t.length);
        }
        function v(t, n) {
          (this.ownerDocument = t.ownerDocument),
            (this.namespaceURI = t.namespaceURI),
            (this._next = null),
            (this._parent = t),
            (this.__data__ = n);
        }
        function g(t, n, e, r, i, o) {
          for (var a, u = 0, s = n.length, c = o.length; u < c; ++u)
            (a = n[u])
              ? ((a.__data__ = o[u]), (r[u] = a))
              : (e[u] = new v(t, o[u]));
          for (; u < s; ++u) (a = n[u]) && (i[u] = a);
        }
        function y(t, n, e, r, i, o, a) {
          var u,
            s,
            c,
            l = {},
            f = n.length,
            h = o.length,
            p = new Array(f);
          for (u = 0; u < f; ++u)
            (s = n[u]) &&
              ((p[u] = c = "$" + a.call(s, s.__data__, u, n)),
              c in l ? (i[u] = s) : (l[c] = s));
          for (u = 0; u < h; ++u)
            (s = l[(c = "$" + a.call(t, o[u], u, o))])
              ? ((r[u] = s), (s.__data__ = o[u]), (l[c] = null))
              : (e[u] = new v(t, o[u]));
          for (u = 0; u < f; ++u) (s = n[u]) && l[p[u]] === s && (i[u] = s);
        }
        function _(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        }
        function x(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function m(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function b(t, n) {
          return function () {
            this.setAttribute(t, n);
          };
        }
        function w(t, n) {
          return function () {
            this.setAttributeNS(t.space, t.local, n);
          };
        }
        function A(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
          };
        }
        function S(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, e);
          };
        }
        function M(t) {
          return (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            (t.document && t) ||
            t.defaultView
          );
        }
        function T(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        function O(t, n, e) {
          return function () {
            this.style.setProperty(t, n, e);
          };
        }
        function k(t, n, e) {
          return function () {
            var r = n.apply(this, arguments);
            null == r
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, r, e);
          };
        }
        function N(t, n) {
          return (
            t.style.getPropertyValue(n) ||
            M(t).getComputedStyle(t, null).getPropertyValue(n)
          );
        }
        function E(t) {
          return function () {
            delete this[t];
          };
        }
        function D(t, n) {
          return function () {
            this[t] = n;
          };
        }
        function I(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : (this[t] = e);
          };
        }
        function j(t) {
          return t.trim().split(/^|\s+/);
        }
        function C(t) {
          return t.classList || new L(t);
        }
        function L(t) {
          (this._node = t), (this._names = j(t.getAttribute("class") || ""));
        }
        function B(t, n) {
          for (var e = C(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
        }
        function R(t, n) {
          for (var e = C(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
        }
        function P(t) {
          return function () {
            B(this, t);
          };
        }
        function z(t) {
          return function () {
            R(this, t);
          };
        }
        function F(t, n) {
          return function () {
            (n.apply(this, arguments) ? B : R)(this, t);
          };
        }
        function W() {
          this.textContent = "";
        }
        function U(t) {
          return function () {
            this.textContent = t;
          };
        }
        function H(t) {
          return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n;
          };
        }
        function Y() {
          this.innerHTML = "";
        }
        function q(t) {
          return function () {
            this.innerHTML = t;
          };
        }
        function Z(t) {
          return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n;
          };
        }
        function $() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function X() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function G() {
          return null;
        }
        function V() {
          var t = this.parentNode;
          t && t.removeChild(this);
        }
        function K() {
          var t = this.cloneNode(!1),
            n = this.parentNode;
          return n ? n.insertBefore(t, this.nextSibling) : t;
        }
        function J() {
          var t = this.cloneNode(!0),
            n = this.parentNode;
          return n ? n.insertBefore(t, this.nextSibling) : t;
        }
        (v.prototype = {
          constructor: v,
          appendChild: function (t) {
            return this._parent.insertBefore(t, this._next);
          },
          insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n);
          },
          querySelector: function (t) {
            return this._parent.querySelector(t);
          },
          querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t);
          },
        }),
          (L.prototype = {
            add: function (t) {
              this._names.indexOf(t) < 0 &&
                (this._names.push(t),
                this._node.setAttribute("class", this._names.join(" ")));
            },
            remove: function (t) {
              var n = this._names.indexOf(t);
              n >= 0 &&
                (this._names.splice(n, 1),
                this._node.setAttribute("class", this._names.join(" ")));
            },
            contains: function (t) {
              return this._names.indexOf(t) >= 0;
            },
          });
        var Q = {},
          tt = null;
        function nt(t, n, e) {
          return (
            (t = et(t, n, e)),
            function (n) {
              var e = n.relatedTarget;
              (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
                t.call(this, n);
            }
          );
        }
        function et(t, n, e) {
          return function (r) {
            var i = tt;
            tt = r;
            try {
              t.call(this, this.__data__, n, e);
            } finally {
              tt = i;
            }
          };
        }
        function rt(t) {
          return t
            .trim()
            .split(/^|\s+/)
            .map(function (t) {
              var n = "",
                e = t.indexOf(".");
              return (
                e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                { type: t, name: n }
              );
            });
        }
        function it(t) {
          return function () {
            var n = this.__on;
            if (n) {
              for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
                (e = n[r]),
                  (t.type && e.type !== t.type) || e.name !== t.name
                    ? (n[++i] = e)
                    : this.removeEventListener(e.type, e.listener, e.capture);
              ++i ? (n.length = i) : delete this.__on;
            }
          };
        }
        function ot(t, n, e) {
          var r = Q.hasOwnProperty(t.type) ? nt : et;
          return function (i, o, a) {
            var u,
              s = this.__on,
              c = r(n, o, a);
            if (s)
              for (var l = 0, f = s.length; l < f; ++l)
                if ((u = s[l]).type === t.type && u.name === t.name)
                  return (
                    this.removeEventListener(u.type, u.listener, u.capture),
                    this.addEventListener(
                      u.type,
                      (u.listener = c),
                      (u.capture = e)
                    ),
                    void (u.value = n)
                  );
            this.addEventListener(t.type, c, e),
              (u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: c,
                capture: e,
              }),
              s ? s.push(u) : (this.__on = [u]);
          };
        }
        function at(t, n, e, r) {
          var i = tt;
          (t.sourceEvent = tt), (tt = t);
          try {
            return n.apply(e, r);
          } finally {
            tt = i;
          }
        }
        function ut(t, n, e) {
          var r = M(t),
            i = r.CustomEvent;
          "function" == typeof i
            ? (i = new i(n, e))
            : ((i = r.document.createEvent("Event")),
              e
                ? (i.initEvent(n, e.bubbles, e.cancelable),
                  (i.detail = e.detail))
                : i.initEvent(n, !1, !1)),
            t.dispatchEvent(i);
        }
        function st(t, n) {
          return function () {
            return ut(this, t, n);
          };
        }
        function ct(t, n) {
          return function () {
            return ut(this, t, n.apply(this, arguments));
          };
        }
        "undefined" != typeof document &&
          ("onmouseenter" in document.documentElement ||
            (Q = { mouseenter: "mouseover", mouseleave: "mouseout" }));
        var lt = [null];
        function ft(t, n) {
          (this._groups = t), (this._parents = n);
        }
        function ht() {
          return new ft([[document.documentElement]], lt);
        }
        ft.prototype = ht.prototype = {
          constructor: ft,
          select: function (t) {
            "function" != typeof t && (t = l(t));
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var o,
                  a,
                  u = n[i],
                  s = u.length,
                  c = (r[i] = new Array(s)),
                  f = 0;
                f < s;
                ++f
              )
                (o = u[f]) &&
                  (a = t.call(o, o.__data__, f, u)) &&
                  ("__data__" in o && (a.__data__ = o.__data__), (c[f] = a));
            return new ft(r, this._parents);
          },
          selectAll: function (t) {
            "function" != typeof t && (t = h(t));
            for (
              var n = this._groups, e = n.length, r = [], i = [], o = 0;
              o < e;
              ++o
            )
              for (var a, u = n[o], s = u.length, c = 0; c < s; ++c)
                (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
            return new ft(r, i);
          },
          filter: function (t) {
            "function" != typeof t && (t = p(t));
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var o, a = n[i], u = a.length, s = (r[i] = []), c = 0;
                c < u;
                ++c
              )
                (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
            return new ft(r, this._parents);
          },
          data: function (t, n) {
            if (!t)
              return (
                (d = new Array(this.size())),
                (l = -1),
                this.each(function (t) {
                  d[++l] = t;
                }),
                d
              );
            var e,
              r = n ? y : g,
              i = this._parents,
              o = this._groups;
            "function" != typeof t &&
              ((e = t),
              (t = function () {
                return e;
              }));
            for (
              var a = o.length,
                u = new Array(a),
                s = new Array(a),
                c = new Array(a),
                l = 0;
              l < a;
              ++l
            ) {
              var f = i[l],
                h = o[l],
                p = h.length,
                d = t.call(f, f && f.__data__, l, i),
                v = d.length,
                _ = (s[l] = new Array(v)),
                x = (u[l] = new Array(v));
              r(f, h, _, x, (c[l] = new Array(p)), d, n);
              for (var m, b, w = 0, A = 0; w < v; ++w)
                if ((m = _[w])) {
                  for (w >= A && (A = w + 1); !(b = x[A]) && ++A < v; );
                  m._next = b || null;
                }
            }
            return ((u = new ft(u, i))._enter = s), (u._exit = c), u;
          },
          enter: function () {
            return new ft(this._enter || this._groups.map(d), this._parents);
          },
          exit: function () {
            return new ft(this._exit || this._groups.map(d), this._parents);
          },
          join: function (t, n, e) {
            var r = this.enter(),
              i = this,
              o = this.exit();
            return (
              (r = "function" == typeof t ? t(r) : r.append(t + "")),
              null != n && (i = n(i)),
              null == e ? o.remove() : e(o),
              r && i ? r.merge(i).order() : i
            );
          },
          merge: function (t) {
            for (
              var n = this._groups,
                e = t._groups,
                r = n.length,
                i = e.length,
                o = Math.min(r, i),
                a = new Array(r),
                u = 0;
              u < o;
              ++u
            )
              for (
                var s,
                  c = n[u],
                  l = e[u],
                  f = c.length,
                  h = (a[u] = new Array(f)),
                  p = 0;
                p < f;
                ++p
              )
                (s = c[p] || l[p]) && (h[p] = s);
            for (; u < r; ++u) a[u] = n[u];
            return new ft(a, this._parents);
          },
          order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; )
              for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
                (r = i[o]) &&
                  (a &&
                    4 ^ r.compareDocumentPosition(a) &&
                    a.parentNode.insertBefore(r, a),
                  (a = r));
            return this;
          },
          sort: function (t) {
            function n(n, e) {
              return n && e ? t(n.__data__, e.__data__) : !n - !e;
            }
            t || (t = _);
            for (
              var e = this._groups, r = e.length, i = new Array(r), o = 0;
              o < r;
              ++o
            ) {
              for (
                var a, u = e[o], s = u.length, c = (i[o] = new Array(s)), l = 0;
                l < s;
                ++l
              )
                (a = u[l]) && (c[l] = a);
              c.sort(n);
            }
            return new ft(i, this._parents).order();
          },
          call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          },
          nodes: function () {
            var t = new Array(this.size()),
              n = -1;
            return (
              this.each(function () {
                t[++n] = this;
              }),
              t
            );
          },
          node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
              for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                var a = r[i];
                if (a) return a;
              }
            return null;
          },
          size: function () {
            var t = 0;
            return (
              this.each(function () {
                ++t;
              }),
              t
            );
          },
          empty: function () {
            return !this.node();
          },
          each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
              for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
                (i = o[a]) && t.call(i, i.__data__, a, o);
            return this;
          },
          attr: function (t, n) {
            var e = o(t);
            if (arguments.length < 2) {
              var r = this.node();
              return e.local
                ? r.getAttributeNS(e.space, e.local)
                : r.getAttribute(e);
            }
            return this.each(
              (null == n
                ? e.local
                  ? m
                  : x
                : "function" == typeof n
                ? e.local
                  ? S
                  : A
                : e.local
                ? w
                : b)(e, n)
            );
          },
          style: function (t, n, e) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? T : "function" == typeof n ? k : O)(
                    t,
                    n,
                    null == e ? "" : e
                  )
                )
              : N(this.node(), t);
          },
          property: function (t, n) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? E : "function" == typeof n ? I : D)(t, n)
                )
              : this.node()[t];
          },
          classed: function (t, n) {
            var e = j(t + "");
            if (arguments.length < 2) {
              for (var r = C(this.node()), i = -1, o = e.length; ++i < o; )
                if (!r.contains(e[i])) return !1;
              return !0;
            }
            return this.each(("function" == typeof n ? F : n ? P : z)(e, n));
          },
          text: function (t) {
            return arguments.length
              ? this.each(null == t ? W : ("function" == typeof t ? H : U)(t))
              : this.node().textContent;
          },
          html: function (t) {
            return arguments.length
              ? this.each(null == t ? Y : ("function" == typeof t ? Z : q)(t))
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each($);
          },
          lower: function () {
            return this.each(X);
          },
          append: function (t) {
            var n = "function" == typeof t ? t : s(t);
            return this.select(function () {
              return this.appendChild(n.apply(this, arguments));
            });
          },
          insert: function (t, n) {
            var e = "function" == typeof t ? t : s(t),
              r = null == n ? G : "function" == typeof n ? n : l(n);
            return this.select(function () {
              return this.insertBefore(
                e.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(V);
          },
          clone: function (t) {
            return this.select(t ? J : K);
          },
          datum: function (t) {
            return arguments.length
              ? this.property("__data__", t)
              : this.node().__data__;
          },
          on: function (t, n, e) {
            var r,
              i,
              o = rt(t + ""),
              a = o.length;
            if (!(arguments.length < 2)) {
              for (u = n ? ot : it, null == e && (e = !1), r = 0; r < a; ++r)
                this.each(u(o[r], n, e));
              return this;
            }
            var u = this.node().__on;
            if (u)
              for (var s, c = 0, l = u.length; c < l; ++c)
                for (r = 0, s = u[c]; r < a; ++r)
                  if ((i = o[r]).type === s.type && i.name === s.name)
                    return s.value;
          },
          dispatch: function (t, n) {
            return this.each(("function" == typeof n ? ct : st)(t, n));
          },
        };
        const pt = ht;
        function dt(t) {
          return "string" == typeof t
            ? new ft([[document.querySelector(t)]], [document.documentElement])
            : new ft([[t]], lt);
        }
        function vt(t) {
          return dt(s(t).call(document.documentElement));
        }
        var gt = 0;
        function yt() {
          return new _t();
        }
        function _t() {
          this._ = "@" + (++gt).toString(36);
        }
        function xt() {
          for (var t, n = tt; (t = n.sourceEvent); ) n = t;
          return n;
        }
        function mt(t, n) {
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (
              (r.x = n.clientX),
              (r.y = n.clientY),
              [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            );
          }
          var i = t.getBoundingClientRect();
          return [
            n.clientX - i.left - t.clientLeft,
            n.clientY - i.top - t.clientTop,
          ];
        }
        function bt(t) {
          var n = xt();
          return n.changedTouches && (n = n.changedTouches[0]), mt(t, n);
        }
        function wt(t) {
          return "string" == typeof t
            ? new ft([document.querySelectorAll(t)], [document.documentElement])
            : new ft([null == t ? [] : t], lt);
        }
        function At(t, n, e) {
          arguments.length < 3 && ((e = n), (n = xt().changedTouches));
          for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
            if ((r = n[i]).identifier === e) return mt(t, r);
          return null;
        }
        function St(t, n) {
          null == n && (n = xt().touches);
          for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
            i[e] = mt(t, n[e]);
          return i;
        }
        _t.prototype = yt.prototype = {
          constructor: _t,
          get: function (t) {
            for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
            return t[n];
          },
          set: function (t, n) {
            return (t[this._] = n);
          },
          remove: function (t) {
            return this._ in t && delete t[this._];
          },
          toString: function () {
            return this._;
          },
        };
      },
      98: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            arc: () => D,
            area: () => R,
            areaRadial: () => Z,
            curveBasis: () => Tt,
            curveBasisClosed: () => kt,
            curveBasisOpen: () => Et,
            curveBundle: () => It,
            curveCardinal: () => Lt,
            curveCardinalClosed: () => Rt,
            curveCardinalOpen: () => zt,
            curveCatmullRom: () => Ut,
            curveCatmullRomClosed: () => Yt,
            curveCatmullRomOpen: () => Zt,
            curveLinear: () => j,
            curveLinearClosed: () => Xt,
            curveMonotoneX: () => en,
            curveMonotoneY: () => rn,
            curveNatural: () => un,
            curveStep: () => cn,
            curveStepAfter: () => fn,
            curveStepBefore: () => ln,
            line: () => B,
            lineRadial: () => q,
            linkHorizontal: () => nt,
            linkRadial: () => rt,
            linkVertical: () => et,
            pie: () => F,
            pointRadial: () => $,
            radialArea: () => Z,
            radialLine: () => q,
            stack: () => vn,
            stackOffsetDiverging: () => yn,
            stackOffsetExpand: () => gn,
            stackOffsetNone: () => hn,
            stackOffsetSilhouette: () => _n,
            stackOffsetWiggle: () => xn,
            stackOrderAppearance: () => mn,
            stackOrderAscending: () => wn,
            stackOrderDescending: () => Sn,
            stackOrderInsideOut: () => Mn,
            stackOrderNone: () => pn,
            stackOrderReverse: () => Tn,
            symbol: () => wt,
            symbolCircle: () => it,
            symbolCross: () => ot,
            symbolDiamond: () => st,
            symbolSquare: () => pt,
            symbolStar: () => ht,
            symbolTriangle: () => vt,
            symbolWye: () => mt,
            symbols: () => bt,
          });
        var r = Math.PI,
          i = 2 * r,
          o = 1e-6,
          a = i - o;
        function u() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        function s() {
          return new u();
        }
        u.prototype = s.prototype = {
          constructor: u,
          moveTo: function (t, n) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +t) +
              "," +
              (this._y0 = this._y1 = +n);
          },
          closePath: function () {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
          },
          lineTo: function (t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
          },
          quadraticCurveTo: function (t, n, e, r) {
            this._ +=
              "Q" +
              +t +
              "," +
              +n +
              "," +
              (this._x1 = +e) +
              "," +
              (this._y1 = +r);
          },
          bezierCurveTo: function (t, n, e, r, i, o) {
            this._ +=
              "C" +
              +t +
              "," +
              +n +
              "," +
              +e +
              "," +
              +r +
              "," +
              (this._x1 = +i) +
              "," +
              (this._y1 = +o);
          },
          arcTo: function (t, n, e, i, a) {
            (t = +t), (n = +n), (e = +e), (i = +i), (a = +a);
            var u = this._x1,
              s = this._y1,
              c = e - t,
              l = i - n,
              f = u - t,
              h = s - n,
              p = f * f + h * h;
            if (a < 0) throw new Error("negative radius: " + a);
            if (null === this._x1)
              this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (p > o)
              if (Math.abs(h * c - l * f) > o && a) {
                var d = e - u,
                  v = i - s,
                  g = c * c + l * l,
                  y = d * d + v * v,
                  _ = Math.sqrt(g),
                  x = Math.sqrt(p),
                  m =
                    a *
                    Math.tan((r - Math.acos((g + p - y) / (2 * _ * x))) / 2),
                  b = m / x,
                  w = m / _;
                Math.abs(b - 1) > o &&
                  (this._ += "L" + (t + b * f) + "," + (n + b * h)),
                  (this._ +=
                    "A" +
                    a +
                    "," +
                    a +
                    ",0,0," +
                    +(h * d > f * v) +
                    "," +
                    (this._x1 = t + w * c) +
                    "," +
                    (this._y1 = n + w * l));
              } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
          },
          arc: function (t, n, e, u, s, c) {
            (t = +t), (n = +n), (c = !!c);
            var l = (e = +e) * Math.cos(u),
              f = e * Math.sin(u),
              h = t + l,
              p = n + f,
              d = 1 ^ c,
              v = c ? u - s : s - u;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1
              ? (this._ += "M" + h + "," + p)
              : (Math.abs(this._x1 - h) > o || Math.abs(this._y1 - p) > o) &&
                (this._ += "L" + h + "," + p),
              e &&
                (v < 0 && (v = (v % i) + i),
                v > a
                  ? (this._ +=
                      "A" +
                      e +
                      "," +
                      e +
                      ",0,1," +
                      d +
                      "," +
                      (t - l) +
                      "," +
                      (n - f) +
                      "A" +
                      e +
                      "," +
                      e +
                      ",0,1," +
                      d +
                      "," +
                      (this._x1 = h) +
                      "," +
                      (this._y1 = p))
                  : v > o &&
                    (this._ +=
                      "A" +
                      e +
                      "," +
                      e +
                      ",0," +
                      +(v >= r) +
                      "," +
                      d +
                      "," +
                      (this._x1 = t + e * Math.cos(s)) +
                      "," +
                      (this._y1 = n + e * Math.sin(s))));
          },
          rect: function (t, n, e, r) {
            this._ +=
              "M" +
              (this._x0 = this._x1 = +t) +
              "," +
              (this._y0 = this._y1 = +n) +
              "h" +
              +e +
              "v" +
              +r +
              "h" +
              -e +
              "Z";
          },
          toString: function () {
            return this._;
          },
        };
        const c = s;
        function l(t) {
          return function () {
            return t;
          };
        }
        var f = Math.abs,
          h = Math.atan2,
          p = Math.cos,
          d = Math.max,
          v = Math.min,
          g = Math.sin,
          y = Math.sqrt,
          _ = 1e-12,
          x = Math.PI,
          m = x / 2,
          b = 2 * x;
        function w(t) {
          return t > 1 ? 0 : t < -1 ? x : Math.acos(t);
        }
        function A(t) {
          return t >= 1 ? m : t <= -1 ? -m : Math.asin(t);
        }
        function S(t) {
          return t.innerRadius;
        }
        function M(t) {
          return t.outerRadius;
        }
        function T(t) {
          return t.startAngle;
        }
        function O(t) {
          return t.endAngle;
        }
        function k(t) {
          return t && t.padAngle;
        }
        function N(t, n, e, r, i, o, a, u) {
          var s = e - t,
            c = r - n,
            l = a - i,
            f = u - o,
            h = f * s - l * c;
          if (!(h * h < _))
            return [t + (h = (l * (n - o) - f * (t - i)) / h) * s, n + h * c];
        }
        function E(t, n, e, r, i, o, a) {
          var u = t - e,
            s = n - r,
            c = (a ? o : -o) / y(u * u + s * s),
            l = c * s,
            f = -c * u,
            h = t + l,
            p = n + f,
            v = e + l,
            g = r + f,
            _ = (h + v) / 2,
            x = (p + g) / 2,
            m = v - h,
            b = g - p,
            w = m * m + b * b,
            A = i - o,
            S = h * g - v * p,
            M = (b < 0 ? -1 : 1) * y(d(0, A * A * w - S * S)),
            T = (S * b - m * M) / w,
            O = (-S * m - b * M) / w,
            k = (S * b + m * M) / w,
            N = (-S * m + b * M) / w,
            E = T - _,
            D = O - x,
            I = k - _,
            j = N - x;
          return (
            E * E + D * D > I * I + j * j && ((T = k), (O = N)),
            {
              cx: T,
              cy: O,
              x01: -l,
              y01: -f,
              x11: T * (i / A - 1),
              y11: O * (i / A - 1),
            }
          );
        }
        function D() {
          var t = S,
            n = M,
            e = l(0),
            r = null,
            i = T,
            o = O,
            a = k,
            u = null;
          function s() {
            var s,
              l,
              d = +t.apply(this, arguments),
              S = +n.apply(this, arguments),
              M = i.apply(this, arguments) - m,
              T = o.apply(this, arguments) - m,
              O = f(T - M),
              k = T > M;
            if (
              (u || (u = s = c()), S < d && ((l = S), (S = d), (d = l)), S > _)
            )
              if (O > b - _)
                u.moveTo(S * p(M), S * g(M)),
                  u.arc(0, 0, S, M, T, !k),
                  d > _ &&
                    (u.moveTo(d * p(T), d * g(T)), u.arc(0, 0, d, T, M, k));
              else {
                var D,
                  I,
                  j = M,
                  C = T,
                  L = M,
                  B = T,
                  R = O,
                  P = O,
                  z = a.apply(this, arguments) / 2,
                  F =
                    z > _ && (r ? +r.apply(this, arguments) : y(d * d + S * S)),
                  W = v(f(S - d) / 2, +e.apply(this, arguments)),
                  U = W,
                  H = W;
                if (F > _) {
                  var Y = A((F / d) * g(z)),
                    q = A((F / S) * g(z));
                  (R -= 2 * Y) > _
                    ? ((L += Y *= k ? 1 : -1), (B -= Y))
                    : ((R = 0), (L = B = (M + T) / 2)),
                    (P -= 2 * q) > _
                      ? ((j += q *= k ? 1 : -1), (C -= q))
                      : ((P = 0), (j = C = (M + T) / 2));
                }
                var Z = S * p(j),
                  $ = S * g(j),
                  X = d * p(B),
                  G = d * g(B);
                if (W > _) {
                  var V,
                    K = S * p(C),
                    J = S * g(C),
                    Q = d * p(L),
                    tt = d * g(L);
                  if (O < x && (V = N(Z, $, Q, tt, K, J, X, G))) {
                    var nt = Z - V[0],
                      et = $ - V[1],
                      rt = K - V[0],
                      it = J - V[1],
                      ot =
                        1 /
                        g(
                          w(
                            (nt * rt + et * it) /
                              (y(nt * nt + et * et) * y(rt * rt + it * it))
                          ) / 2
                        ),
                      at = y(V[0] * V[0] + V[1] * V[1]);
                    (U = v(W, (d - at) / (ot - 1))),
                      (H = v(W, (S - at) / (ot + 1)));
                  }
                }
                P > _
                  ? H > _
                    ? ((D = E(Q, tt, Z, $, S, H, k)),
                      (I = E(K, J, X, G, S, H, k)),
                      u.moveTo(D.cx + D.x01, D.cy + D.y01),
                      H < W
                        ? u.arc(
                            D.cx,
                            D.cy,
                            H,
                            h(D.y01, D.x01),
                            h(I.y01, I.x01),
                            !k
                          )
                        : (u.arc(
                            D.cx,
                            D.cy,
                            H,
                            h(D.y01, D.x01),
                            h(D.y11, D.x11),
                            !k
                          ),
                          u.arc(
                            0,
                            0,
                            S,
                            h(D.cy + D.y11, D.cx + D.x11),
                            h(I.cy + I.y11, I.cx + I.x11),
                            !k
                          ),
                          u.arc(
                            I.cx,
                            I.cy,
                            H,
                            h(I.y11, I.x11),
                            h(I.y01, I.x01),
                            !k
                          )))
                    : (u.moveTo(Z, $), u.arc(0, 0, S, j, C, !k))
                  : u.moveTo(Z, $),
                  d > _ && R > _
                    ? U > _
                      ? ((D = E(X, G, K, J, d, -U, k)),
                        (I = E(Z, $, Q, tt, d, -U, k)),
                        u.lineTo(D.cx + D.x01, D.cy + D.y01),
                        U < W
                          ? u.arc(
                              D.cx,
                              D.cy,
                              U,
                              h(D.y01, D.x01),
                              h(I.y01, I.x01),
                              !k
                            )
                          : (u.arc(
                              D.cx,
                              D.cy,
                              U,
                              h(D.y01, D.x01),
                              h(D.y11, D.x11),
                              !k
                            ),
                            u.arc(
                              0,
                              0,
                              d,
                              h(D.cy + D.y11, D.cx + D.x11),
                              h(I.cy + I.y11, I.cx + I.x11),
                              k
                            ),
                            u.arc(
                              I.cx,
                              I.cy,
                              U,
                              h(I.y11, I.x11),
                              h(I.y01, I.x01),
                              !k
                            )))
                      : u.arc(0, 0, d, B, L, k)
                    : u.lineTo(X, G);
              }
            else u.moveTo(0, 0);
            if ((u.closePath(), s)) return (u = null), s + "" || null;
          }
          return (
            (s.centroid = function () {
              var e =
                  (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                r =
                  (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
                  x / 2;
              return [p(r) * e, g(r) * e];
            }),
            (s.innerRadius = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(+n)), s)
                : t;
            }),
            (s.outerRadius = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : l(+t)), s)
                : n;
            }),
            (s.cornerRadius = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : l(+t)), s)
                : e;
            }),
            (s.padRadius = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : l(+t)),
                  s)
                : r;
            }),
            (s.startAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : l(+t)), s)
                : i;
            }),
            (s.endAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : l(+t)), s)
                : o;
            }),
            (s.padAngle = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : l(+t)), s)
                : a;
            }),
            (s.context = function (t) {
              return arguments.length ? ((u = null == t ? null : t), s) : u;
            }),
            s
          );
        }
        function I(t) {
          this._context = t;
        }
        function j(t) {
          return new I(t);
        }
        function C(t) {
          return t[0];
        }
        function L(t) {
          return t[1];
        }
        function B() {
          var t = C,
            n = L,
            e = l(!0),
            r = null,
            i = j,
            o = null;
          function a(a) {
            var u,
              s,
              l,
              f = a.length,
              h = !1;
            for (null == r && (o = i((l = c()))), u = 0; u <= f; ++u)
              !(u < f && e((s = a[u]), u, a)) === h &&
                ((h = !h) ? o.lineStart() : o.lineEnd()),
                h && o.point(+t(s, u, a), +n(s, u, a));
            if (l) return (o = null), l + "" || null;
          }
          return (
            (a.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(+n)), a)
                : t;
            }),
            (a.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : l(+t)), a)
                : n;
            }),
            (a.defined = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : l(!!t)), a)
                : e;
            }),
            (a.curve = function (t) {
              return arguments.length
                ? ((i = t), null != r && (o = i(r)), a)
                : i;
            }),
            (a.context = function (t) {
              return arguments.length
                ? (null == t ? (r = o = null) : (o = i((r = t))), a)
                : r;
            }),
            a
          );
        }
        function R() {
          var t = C,
            n = null,
            e = l(0),
            r = L,
            i = l(!0),
            o = null,
            a = j,
            u = null;
          function s(s) {
            var l,
              f,
              h,
              p,
              d,
              v = s.length,
              g = !1,
              y = new Array(v),
              _ = new Array(v);
            for (null == o && (u = a((d = c()))), l = 0; l <= v; ++l) {
              if (!(l < v && i((p = s[l]), l, s)) === g)
                if ((g = !g)) (f = l), u.areaStart(), u.lineStart();
                else {
                  for (u.lineEnd(), u.lineStart(), h = l - 1; h >= f; --h)
                    u.point(y[h], _[h]);
                  u.lineEnd(), u.areaEnd();
                }
              g &&
                ((y[l] = +t(p, l, s)),
                (_[l] = +e(p, l, s)),
                u.point(n ? +n(p, l, s) : y[l], r ? +r(p, l, s) : _[l]));
            }
            if (d) return (u = null), d + "" || null;
          }
          function f() {
            return B().defined(i).curve(a).context(o);
          }
          return (
            (s.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : l(+e)), (n = null), s)
                : t;
            }),
            (s.x0 = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(+n)), s)
                : t;
            }),
            (s.x1 = function (t) {
              return arguments.length
                ? ((n = null == t ? null : "function" == typeof t ? t : l(+t)),
                  s)
                : n;
            }),
            (s.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : l(+t)), (r = null), s)
                : e;
            }),
            (s.y0 = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : l(+t)), s)
                : e;
            }),
            (s.y1 = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : l(+t)),
                  s)
                : r;
            }),
            (s.lineX0 = s.lineY0 = function () {
              return f().x(t).y(e);
            }),
            (s.lineY1 = function () {
              return f().x(t).y(r);
            }),
            (s.lineX1 = function () {
              return f().x(n).y(e);
            }),
            (s.defined = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : l(!!t)), s)
                : i;
            }),
            (s.curve = function (t) {
              return arguments.length
                ? ((a = t), null != o && (u = a(o)), s)
                : a;
            }),
            (s.context = function (t) {
              return arguments.length
                ? (null == t ? (o = u = null) : (u = a((o = t))), s)
                : o;
            }),
            s
          );
        }
        function P(t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        }
        function z(t) {
          return t;
        }
        function F() {
          var t = z,
            n = P,
            e = null,
            r = l(0),
            i = l(b),
            o = l(0);
          function a(a) {
            var u,
              s,
              c,
              l,
              f,
              h = a.length,
              p = 0,
              d = new Array(h),
              v = new Array(h),
              g = +r.apply(this, arguments),
              y = Math.min(b, Math.max(-b, i.apply(this, arguments) - g)),
              _ = Math.min(Math.abs(y) / h, o.apply(this, arguments)),
              x = _ * (y < 0 ? -1 : 1);
            for (u = 0; u < h; ++u)
              (f = v[(d[u] = u)] = +t(a[u], u, a)) > 0 && (p += f);
            for (
              null != n
                ? d.sort(function (t, e) {
                    return n(v[t], v[e]);
                  })
                : null != e &&
                  d.sort(function (t, n) {
                    return e(a[t], a[n]);
                  }),
                u = 0,
                c = p ? (y - h * x) / p : 0;
              u < h;
              ++u, g = l
            )
              (s = d[u]),
                (l = g + ((f = v[s]) > 0 ? f * c : 0) + x),
                (v[s] = {
                  data: a[s],
                  index: u,
                  value: f,
                  startAngle: g,
                  endAngle: l,
                  padAngle: _,
                });
            return v;
          }
          return (
            (a.value = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(+n)), a)
                : t;
            }),
            (a.sortValues = function (t) {
              return arguments.length ? ((n = t), (e = null), a) : n;
            }),
            (a.sort = function (t) {
              return arguments.length ? ((e = t), (n = null), a) : e;
            }),
            (a.startAngle = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : l(+t)), a)
                : r;
            }),
            (a.endAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : l(+t)), a)
                : i;
            }),
            (a.padAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : l(+t)), a)
                : o;
            }),
            a
          );
        }
        I.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, n);
            }
          },
        };
        var W = H(j);
        function U(t) {
          this._curve = t;
        }
        function H(t) {
          function n(n) {
            return new U(t(n));
          }
          return (n._curve = t), n;
        }
        function Y(t) {
          var n = t.curve;
          return (
            (t.angle = t.x),
            delete t.x,
            (t.radius = t.y),
            delete t.y,
            (t.curve = function (t) {
              return arguments.length ? n(H(t)) : n()._curve;
            }),
            t
          );
        }
        function q() {
          return Y(B().curve(W));
        }
        function Z() {
          var t = R().curve(W),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
          return (
            (t.angle = t.x),
            delete t.x,
            (t.startAngle = t.x0),
            delete t.x0,
            (t.endAngle = t.x1),
            delete t.x1,
            (t.radius = t.y),
            delete t.y,
            (t.innerRadius = t.y0),
            delete t.y0,
            (t.outerRadius = t.y1),
            delete t.y1,
            (t.lineStartAngle = function () {
              return Y(e());
            }),
            delete t.lineX0,
            (t.lineEndAngle = function () {
              return Y(r());
            }),
            delete t.lineX1,
            (t.lineInnerRadius = function () {
              return Y(i());
            }),
            delete t.lineY0,
            (t.lineOuterRadius = function () {
              return Y(o());
            }),
            delete t.lineY1,
            (t.curve = function (t) {
              return arguments.length ? n(H(t)) : n()._curve;
            }),
            t
          );
        }
        function $(t, n) {
          return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
        }
        U.prototype = {
          areaStart: function () {
            this._curve.areaStart();
          },
          areaEnd: function () {
            this._curve.areaEnd();
          },
          lineStart: function () {
            this._curve.lineStart();
          },
          lineEnd: function () {
            this._curve.lineEnd();
          },
          point: function (t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t));
          },
        };
        var X = Array.prototype.slice;
        function G(t) {
          return t.source;
        }
        function V(t) {
          return t.target;
        }
        function K(t) {
          var n = G,
            e = V,
            r = C,
            i = L,
            o = null;
          function a() {
            var a,
              u = X.call(arguments),
              s = n.apply(this, u),
              l = e.apply(this, u);
            if (
              (o || (o = a = c()),
              t(
                o,
                +r.apply(this, ((u[0] = s), u)),
                +i.apply(this, u),
                +r.apply(this, ((u[0] = l), u)),
                +i.apply(this, u)
              ),
              a)
            )
              return (o = null), a + "" || null;
          }
          return (
            (a.source = function (t) {
              return arguments.length ? ((n = t), a) : n;
            }),
            (a.target = function (t) {
              return arguments.length ? ((e = t), a) : e;
            }),
            (a.x = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : l(+t)), a)
                : r;
            }),
            (a.y = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : l(+t)), a)
                : i;
            }),
            (a.context = function (t) {
              return arguments.length ? ((o = null == t ? null : t), a) : o;
            }),
            a
          );
        }
        function J(t, n, e, r, i) {
          t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
        }
        function Q(t, n, e, r, i) {
          t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
        }
        function tt(t, n, e, r, i) {
          var o = $(n, e),
            a = $(n, (e = (e + i) / 2)),
            u = $(r, e),
            s = $(r, i);
          t.moveTo(o[0], o[1]),
            t.bezierCurveTo(a[0], a[1], u[0], u[1], s[0], s[1]);
        }
        function nt() {
          return K(J);
        }
        function et() {
          return K(Q);
        }
        function rt() {
          var t = K(tt);
          return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
        }
        const it = {
            draw: function (t, n) {
              var e = Math.sqrt(n / x);
              t.moveTo(e, 0), t.arc(0, 0, e, 0, b);
            },
          },
          ot = {
            draw: function (t, n) {
              var e = Math.sqrt(n / 5) / 2;
              t.moveTo(-3 * e, -e),
                t.lineTo(-e, -e),
                t.lineTo(-e, -3 * e),
                t.lineTo(e, -3 * e),
                t.lineTo(e, -e),
                t.lineTo(3 * e, -e),
                t.lineTo(3 * e, e),
                t.lineTo(e, e),
                t.lineTo(e, 3 * e),
                t.lineTo(-e, 3 * e),
                t.lineTo(-e, e),
                t.lineTo(-3 * e, e),
                t.closePath();
            },
          };
        var at = Math.sqrt(1 / 3),
          ut = 2 * at;
        const st = {
          draw: function (t, n) {
            var e = Math.sqrt(n / ut),
              r = e * at;
            t.moveTo(0, -e),
              t.lineTo(r, 0),
              t.lineTo(0, e),
              t.lineTo(-r, 0),
              t.closePath();
          },
        };
        var ct = Math.sin(x / 10) / Math.sin((7 * x) / 10),
          lt = Math.sin(b / 10) * ct,
          ft = -Math.cos(b / 10) * ct;
        const ht = {
            draw: function (t, n) {
              var e = Math.sqrt(0.8908130915292852 * n),
                r = lt * e,
                i = ft * e;
              t.moveTo(0, -e), t.lineTo(r, i);
              for (var o = 1; o < 5; ++o) {
                var a = (b * o) / 5,
                  u = Math.cos(a),
                  s = Math.sin(a);
                t.lineTo(s * e, -u * e), t.lineTo(u * r - s * i, s * r + u * i);
              }
              t.closePath();
            },
          },
          pt = {
            draw: function (t, n) {
              var e = Math.sqrt(n),
                r = -e / 2;
              t.rect(r, r, e, e);
            },
          };
        var dt = Math.sqrt(3);
        const vt = {
          draw: function (t, n) {
            var e = -Math.sqrt(n / (3 * dt));
            t.moveTo(0, 2 * e),
              t.lineTo(-dt * e, -e),
              t.lineTo(dt * e, -e),
              t.closePath();
          },
        };
        var gt = -0.5,
          yt = Math.sqrt(3) / 2,
          _t = 1 / Math.sqrt(12),
          xt = 3 * (_t / 2 + 1);
        const mt = {
          draw: function (t, n) {
            var e = Math.sqrt(n / xt),
              r = e / 2,
              i = e * _t,
              o = r,
              a = e * _t + e,
              u = -o,
              s = a;
            t.moveTo(r, i),
              t.lineTo(o, a),
              t.lineTo(u, s),
              t.lineTo(gt * r - yt * i, yt * r + gt * i),
              t.lineTo(gt * o - yt * a, yt * o + gt * a),
              t.lineTo(gt * u - yt * s, yt * u + gt * s),
              t.lineTo(gt * r + yt * i, gt * i - yt * r),
              t.lineTo(gt * o + yt * a, gt * a - yt * o),
              t.lineTo(gt * u + yt * s, gt * s - yt * u),
              t.closePath();
          },
        };
        var bt = [it, ot, st, pt, ht, vt, mt];
        function wt() {
          var t = l(it),
            n = l(64),
            e = null;
          function r() {
            var r;
            if (
              (e || (e = r = c()),
              t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
              r)
            )
              return (e = null), r + "" || null;
          }
          return (
            (r.type = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(n)), r)
                : t;
            }),
            (r.size = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : l(+t)), r)
                : n;
            }),
            (r.context = function (t) {
              return arguments.length ? ((e = null == t ? null : t), r) : e;
            }),
            r
          );
        }
        function At() {}
        function St(t, n, e) {
          t._context.bezierCurveTo(
            (2 * t._x0 + t._x1) / 3,
            (2 * t._y0 + t._y1) / 3,
            (t._x0 + 2 * t._x1) / 3,
            (t._y0 + 2 * t._y1) / 3,
            (t._x0 + 4 * t._x1 + n) / 6,
            (t._y0 + 4 * t._y1 + e) / 6
          );
        }
        function Mt(t) {
          this._context = t;
        }
        function Tt(t) {
          return new Mt(t);
        }
        function Ot(t) {
          this._context = t;
        }
        function kt(t) {
          return new Ot(t);
        }
        function Nt(t) {
          this._context = t;
        }
        function Et(t) {
          return new Nt(t);
        }
        function Dt(t, n) {
          (this._basis = new Mt(t)), (this._beta = n);
        }
        (Mt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                St(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6
                  );
              default:
                St(this, t, n);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n);
          },
        }),
          (Ot.prototype = {
            areaStart: At,
            areaEnd: At,
            lineStart: function () {
              (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                  break;
                case 2:
                  this._context.moveTo(
                    (this._x2 + 2 * this._x3) / 3,
                    (this._y2 + 2 * this._y3) / 3
                  ),
                    this._context.lineTo(
                      (this._x3 + 2 * this._x2) / 3,
                      (this._y3 + 2 * this._y2) / 3
                    ),
                    this._context.closePath();
                  break;
                case 3:
                  this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4);
              }
            },
            point: function (t, n) {
              switch (((t = +t), (n = +n), this._point)) {
                case 0:
                  (this._point = 1), (this._x2 = t), (this._y2 = n);
                  break;
                case 1:
                  (this._point = 2), (this._x3 = t), (this._y3 = n);
                  break;
                case 2:
                  (this._point = 3),
                    (this._x4 = t),
                    (this._y4 = n),
                    this._context.moveTo(
                      (this._x0 + 4 * this._x1 + t) / 6,
                      (this._y0 + 4 * this._y1 + n) / 6
                    );
                  break;
                default:
                  St(this, t, n);
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = n);
            },
          }),
          (Nt.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 3 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, n) {
              switch (((t = +t), (n = +n), this._point)) {
                case 0:
                  this._point = 1;
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  this._point = 3;
                  var e = (this._x0 + 4 * this._x1 + t) / 6,
                    r = (this._y0 + 4 * this._y1 + n) / 6;
                  this._line
                    ? this._context.lineTo(e, r)
                    : this._context.moveTo(e, r);
                  break;
                case 3:
                  this._point = 4;
                default:
                  St(this, t, n);
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = n);
            },
          }),
          (Dt.prototype = {
            lineStart: function () {
              (this._x = []), (this._y = []), this._basis.lineStart();
            },
            lineEnd: function () {
              var t = this._x,
                n = this._y,
                e = t.length - 1;
              if (e > 0)
                for (
                  var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, s = -1;
                  ++s <= e;

                )
                  (r = s / e),
                    this._basis.point(
                      this._beta * t[s] + (1 - this._beta) * (i + r * a),
                      this._beta * n[s] + (1 - this._beta) * (o + r * u)
                    );
              (this._x = this._y = null), this._basis.lineEnd();
            },
            point: function (t, n) {
              this._x.push(+t), this._y.push(+n);
            },
          });
        const It = (function t(n) {
          function e(t) {
            return 1 === n ? new Mt(t) : new Dt(t, n);
          }
          return (
            (e.beta = function (n) {
              return t(+n);
            }),
            e
          );
        })(0.85);
        function jt(t, n, e) {
          t._context.bezierCurveTo(
            t._x1 + t._k * (t._x2 - t._x0),
            t._y1 + t._k * (t._y2 - t._y0),
            t._x2 + t._k * (t._x1 - n),
            t._y2 + t._k * (t._y1 - e),
            t._x2,
            t._y2
          );
        }
        function Ct(t, n) {
          (this._context = t), (this._k = (1 - n) / 6);
        }
        Ct.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                jt(this, this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                (this._point = 2), (this._x1 = t), (this._y1 = n);
                break;
              case 2:
                this._point = 3;
              default:
                jt(this, t, n);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const Lt = (function t(n) {
          function e(t) {
            return new Ct(t, n);
          }
          return (
            (e.tension = function (n) {
              return t(+n);
            }),
            e
          );
        })(0);
        function Bt(t, n) {
          (this._context = t), (this._k = (1 - n) / 6);
        }
        Bt.prototype = {
          areaStart: At,
          areaEnd: At,
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = n);
                break;
              case 1:
                (this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = n));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = n);
                break;
              default:
                jt(this, t, n);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const Rt = (function t(n) {
          function e(t) {
            return new Bt(t, n);
          }
          return (
            (e.tension = function (n) {
              return t(+n);
            }),
            e
          );
        })(0);
        function Pt(t, n) {
          (this._context = t), (this._k = (1 - n) / 6);
        }
        Pt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                jt(this, t, n);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const zt = (function t(n) {
          function e(t) {
            return new Pt(t, n);
          }
          return (
            (e.tension = function (n) {
              return t(+n);
            }),
            e
          );
        })(0);
        function Ft(t, n, e) {
          var r = t._x1,
            i = t._y1,
            o = t._x2,
            a = t._y2;
          if (t._l01_a > _) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
              s = 3 * t._l01_a * (t._l01_a + t._l12_a);
            (r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s),
              (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s);
          }
          if (t._l23_a > _) {
            var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
              l = 3 * t._l23_a * (t._l23_a + t._l12_a);
            (o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l),
              (a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / l);
          }
          t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
        }
        function Wt(t, n) {
          (this._context = t), (this._alpha = n);
        }
        Wt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                this.point(this._x2, this._y2);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
              default:
                Ft(this, t, n);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const Ut = (function t(n) {
          function e(t) {
            return n ? new Wt(t, n) : new Ct(t, 0);
          }
          return (
            (e.alpha = function (n) {
              return t(+n);
            }),
            e
          );
        })(0.5);
        function Ht(t, n) {
          (this._context = t), (this._alpha = n);
        }
        Ht.prototype = {
          areaStart: At,
          areaEnd: At,
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5);
            }
          },
          point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                (this._point = 1), (this._x3 = t), (this._y3 = n);
                break;
              case 1:
                (this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = n));
                break;
              case 2:
                (this._point = 3), (this._x5 = t), (this._y5 = n);
                break;
              default:
                Ft(this, t, n);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const Yt = (function t(n) {
          function e(t) {
            return n ? new Ht(t, n) : new Bt(t, 0);
          }
          return (
            (e.alpha = function (n) {
              return t(+n);
            }),
            e
          );
        })(0.5);
        function qt(t, n) {
          (this._context = t), (this._alpha = n);
        }
        qt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n;
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              );
            }
            switch (this._point) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2);
                break;
              case 3:
                this._point = 4;
              default:
                Ft(this, t, n);
            }
            (this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n);
          },
        };
        const Zt = (function t(n) {
          function e(t) {
            return n ? new qt(t, n) : new Pt(t, 0);
          }
          return (
            (e.alpha = function (n) {
              return t(+n);
            }),
            e
          );
        })(0.5);
        function $t(t) {
          this._context = t;
        }
        function Xt(t) {
          return new $t(t);
        }
        function Gt(t) {
          return t < 0 ? -1 : 1;
        }
        function Vt(t, n, e) {
          var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
            a = (e - t._y1) / (i || (r < 0 && -0)),
            u = (o * i + a * r) / (r + i);
          return (
            (Gt(o) + Gt(a)) *
              Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0
          );
        }
        function Kt(t, n) {
          var e = t._x1 - t._x0;
          return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
        }
        function Jt(t, n, e) {
          var r = t._x0,
            i = t._y0,
            o = t._x1,
            a = t._y1,
            u = (o - r) / 3;
          t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
        }
        function Qt(t) {
          this._context = t;
        }
        function tn(t) {
          this._context = new nn(t);
        }
        function nn(t) {
          this._context = t;
        }
        function en(t) {
          return new Qt(t);
        }
        function rn(t) {
          return new tn(t);
        }
        function on(t) {
          this._context = t;
        }
        function an(t) {
          var n,
            e,
            r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            a = new Array(r);
          for (
            i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1;
            n < r - 1;
            ++n
          )
            (i[n] = 1), (o[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]);
          for (
            i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1;
            n < r;
            ++n
          )
            (e = i[n] / o[n - 1]), (o[n] -= e), (a[n] -= e * a[n - 1]);
          for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
            i[n] = (a[n] - i[n + 1]) / o[n];
          for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
            o[n] = 2 * t[n + 1] - i[n + 1];
          return [i, o];
        }
        function un(t) {
          return new on(t);
        }
        function sn(t, n) {
          (this._context = t), (this._t = n);
        }
        function cn(t) {
          return new sn(t, 0.5);
        }
        function ln(t) {
          return new sn(t, 0);
        }
        function fn(t) {
          return new sn(t, 1);
        }
        function hn(t, n) {
          if ((i = t.length) > 1)
            for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
              for (r = a, a = t[n[o]], e = 0; e < u; ++e)
                a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
        }
        function pn(t) {
          for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
          return e;
        }
        function dn(t, n) {
          return t[n];
        }
        function vn() {
          var t = l([]),
            n = pn,
            e = hn,
            r = dn;
          function i(i) {
            var o,
              a,
              u = t.apply(this, arguments),
              s = i.length,
              c = u.length,
              l = new Array(c);
            for (o = 0; o < c; ++o) {
              for (
                var f, h = u[o], p = (l[o] = new Array(s)), d = 0;
                d < s;
                ++d
              )
                (p[d] = f = [0, +r(i[d], h, d, i)]), (f.data = i[d]);
              p.key = h;
            }
            for (o = 0, a = n(l); o < c; ++o) l[a[o]].index = o;
            return e(l, a), l;
          }
          return (
            (i.keys = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : l(X.call(n))), i)
                : t;
            }),
            (i.value = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : l(+t)), i)
                : r;
            }),
            (i.order = function (t) {
              return arguments.length
                ? ((n =
                    null == t ? pn : "function" == typeof t ? t : l(X.call(t))),
                  i)
                : n;
            }),
            (i.offset = function (t) {
              return arguments.length ? ((e = null == t ? hn : t), i) : e;
            }),
            i
          );
        }
        function gn(t, n) {
          if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
              for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
              if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
            }
            hn(t, n);
          }
        }
        function yn(t, n) {
          if ((u = t.length) > 0)
            for (var e, r, i, o, a, u, s = 0, c = t[n[0]].length; s < c; ++s)
              for (o = a = 0, e = 0; e < u; ++e)
                (i = (r = t[n[e]][s])[1] - r[0]) > 0
                  ? ((r[0] = o), (r[1] = o += i))
                  : i < 0
                  ? ((r[1] = a), (r[0] = a += i))
                  : ((r[0] = 0), (r[1] = i));
        }
        function _n(t, n) {
          if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
              for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
              i[r][1] += i[r][0] = -u / 2;
            }
            hn(t, n);
          }
        }
        function xn(t, n) {
          if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, a = 1; a < r; ++a) {
              for (var u = 0, s = 0, c = 0; u < i; ++u) {
                for (
                  var l = t[n[u]],
                    f = l[a][1] || 0,
                    h = (f - (l[a - 1][1] || 0)) / 2,
                    p = 0;
                  p < u;
                  ++p
                ) {
                  var d = t[n[p]];
                  h += (d[a][1] || 0) - (d[a - 1][1] || 0);
                }
                (s += f), (c += h * f);
              }
              (e[a - 1][1] += e[a - 1][0] = o), s && (o -= c / s);
            }
            (e[a - 1][1] += e[a - 1][0] = o), hn(t, n);
          }
        }
        function mn(t) {
          var n = t.map(bn);
          return pn(t).sort(function (t, e) {
            return n[t] - n[e];
          });
        }
        function bn(t) {
          for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; )
            (n = +t[e][1]) > o && ((o = n), (r = e));
          return r;
        }
        function wn(t) {
          var n = t.map(An);
          return pn(t).sort(function (t, e) {
            return n[t] - n[e];
          });
        }
        function An(t) {
          for (var n, e = 0, r = -1, i = t.length; ++r < i; )
            (n = +t[r][1]) && (e += n);
          return e;
        }
        function Sn(t) {
          return wn(t).reverse();
        }
        function Mn(t) {
          var n,
            e,
            r = t.length,
            i = t.map(An),
            o = mn(t),
            a = 0,
            u = 0,
            s = [],
            c = [];
          for (n = 0; n < r; ++n)
            (e = o[n]),
              a < u ? ((a += i[e]), s.push(e)) : ((u += i[e]), c.push(e));
          return c.reverse().concat(s);
        }
        function Tn(t) {
          return pn(t).reverse();
        }
        ($t.prototype = {
          areaStart: At,
          areaEnd: At,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (t, n) {
            (t = +t),
              (n = +n),
              this._point
                ? this._context.lineTo(t, n)
                : ((this._point = 1), this._context.moveTo(t, n));
          },
        }),
          (Qt.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
                (this._point = 0);
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x1, this._y1);
                  break;
                case 3:
                  Jt(this, this._t0, Kt(this, this._t0));
              }
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, n) {
              var e = NaN;
              if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
                switch (this._point) {
                  case 0:
                    (this._point = 1),
                      this._line
                        ? this._context.lineTo(t, n)
                        : this._context.moveTo(t, n);
                    break;
                  case 1:
                    this._point = 2;
                    break;
                  case 2:
                    (this._point = 3),
                      Jt(this, Kt(this, (e = Vt(this, t, n))), e);
                    break;
                  default:
                    Jt(this, this._t0, (e = Vt(this, t, n)));
                }
                (this._x0 = this._x1),
                  (this._x1 = t),
                  (this._y0 = this._y1),
                  (this._y1 = n),
                  (this._t0 = e);
              }
            },
          }),
          ((tn.prototype = Object.create(Qt.prototype)).point = function (
            t,
            n
          ) {
            Qt.prototype.point.call(this, n, t);
          }),
          (nn.prototype = {
            moveTo: function (t, n) {
              this._context.moveTo(n, t);
            },
            closePath: function () {
              this._context.closePath();
            },
            lineTo: function (t, n) {
              this._context.lineTo(n, t);
            },
            bezierCurveTo: function (t, n, e, r, i, o) {
              this._context.bezierCurveTo(n, t, r, e, o, i);
            },
          }),
          (on.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = []), (this._y = []);
            },
            lineEnd: function () {
              var t = this._x,
                n = this._y,
                e = t.length;
              if (e)
                if (
                  (this._line
                    ? this._context.lineTo(t[0], n[0])
                    : this._context.moveTo(t[0], n[0]),
                  2 === e)
                )
                  this._context.lineTo(t[1], n[1]);
                else
                  for (var r = an(t), i = an(n), o = 0, a = 1; a < e; ++o, ++a)
                    this._context.bezierCurveTo(
                      r[0][o],
                      i[0][o],
                      r[1][o],
                      i[1][o],
                      t[a],
                      n[a]
                    );
              (this._line || (0 !== this._line && 1 === e)) &&
                this._context.closePath(),
                (this._line = 1 - this._line),
                (this._x = this._y = null);
            },
            point: function (t, n) {
              this._x.push(+t), this._y.push(+n);
            },
          }),
          (sn.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              (this._x = this._y = NaN), (this._point = 0);
            },
            lineEnd: function () {
              0 < this._t &&
                this._t < 1 &&
                2 === this._point &&
                this._context.lineTo(this._x, this._y),
                (this._line || (0 !== this._line && 1 === this._point)) &&
                  this._context.closePath(),
                this._line >= 0 &&
                  ((this._t = 1 - this._t), (this._line = 1 - this._line));
            },
            point: function (t, n) {
              switch (((t = +t), (n = +n), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, n)
                      : this._context.moveTo(t, n);
                  break;
                case 1:
                  this._point = 2;
                default:
                  if (this._t <= 0)
                    this._context.lineTo(this._x, n),
                      this._context.lineTo(t, n);
                  else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                      this._context.lineTo(e, n);
                  }
              }
              (this._x = t), (this._y = n);
            },
          });
      },
      317: (t, n, e) => {
        "use strict";
        e.d(n, {
          i$: () => i,
          Z1: () => o,
          g0: () => a,
          wp: () => u,
          ZP: () => c,
        });
        var r,
          i,
          o,
          a,
          u,
          s = e(472);
        function c(t) {
          return (
            (r = (0, s.Z)(t)),
            (i = r.format),
            (o = r.parse),
            (a = r.utcFormat),
            (u = r.utcParse),
            r
          );
        }
        c({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        });
      },
      956: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            isoFormat: () => a,
            isoParse: () => u,
            timeFormat: () => r.i$,
            timeFormatDefaultLocale: () => r.ZP,
            timeFormatLocale: () => i.Z,
            timeParse: () => r.Z1,
            utcFormat: () => r.g0,
            utcParse: () => r.wp,
          });
        var r = e(317),
          i = e(472),
          o = "%Y-%m-%dT%H:%M:%S.%LZ";
        const a = Date.prototype.toISOString
            ? function (t) {
                return t.toISOString();
              }
            : (0, r.g0)(o),
          u = +new Date("2000-01-01T00:00:00.000Z")
            ? function (t) {
                var n = new Date(t);
                return isNaN(n) ? null : n;
              }
            : (0, r.wp)(o);
      },
      472: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => h });
        var r = e(326),
          i = e(692),
          o = e(776),
          a = e(478),
          u = e(209),
          s = e(181);
        function c(t) {
          if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n;
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function l(t) {
          if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n;
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function f(t, n, e) {
          return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
        }
        function h(t) {
          var n = t.dateTime,
            e = t.date,
            u = t.time,
            s = t.periods,
            h = t.days,
            d = t.shortDays,
            v = t.months,
            g = t.shortMonths,
            y = x(s),
            _ = m(s),
            J = x(h),
            _t = m(h),
            Et = x(d),
            Dt = m(d),
            It = x(v),
            jt = m(v),
            Ct = x(g),
            Lt = m(g),
            Bt = {
              a: function (t) {
                return d[t.getDay()];
              },
              A: function (t) {
                return h[t.getDay()];
              },
              b: function (t) {
                return g[t.getMonth()];
              },
              B: function (t) {
                return v[t.getMonth()];
              },
              c: null,
              d: W,
              e: W,
              f: Z,
              g: rt,
              G: ot,
              H: U,
              I: H,
              j: Y,
              L: q,
              m: $,
              M: X,
              p: function (t) {
                return s[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: kt,
              s: Nt,
              S: G,
              u: V,
              U: K,
              V: Q,
              w: tt,
              W: nt,
              x: null,
              X: null,
              y: et,
              Y: it,
              Z: at,
              "%": Ot,
            },
            Rt = {
              a: function (t) {
                return d[t.getUTCDay()];
              },
              A: function (t) {
                return h[t.getUTCDay()];
              },
              b: function (t) {
                return g[t.getUTCMonth()];
              },
              B: function (t) {
                return v[t.getUTCMonth()];
              },
              c: null,
              d: ut,
              e: ut,
              f: ht,
              g: At,
              G: Mt,
              H: st,
              I: ct,
              j: lt,
              L: ft,
              m: pt,
              M: dt,
              p: function (t) {
                return s[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: kt,
              s: Nt,
              S: vt,
              u: gt,
              U: yt,
              V: xt,
              w: mt,
              W: bt,
              x: null,
              X: null,
              y: wt,
              Y: St,
              Z: Tt,
              "%": Ot,
            },
            Pt = {
              a: function (t, n, e) {
                var r = Et.exec(n.slice(e));
                return r
                  ? ((t.w = Dt[r[0].toLowerCase()]), e + r[0].length)
                  : -1;
              },
              A: function (t, n, e) {
                var r = J.exec(n.slice(e));
                return r
                  ? ((t.w = _t[r[0].toLowerCase()]), e + r[0].length)
                  : -1;
              },
              b: function (t, n, e) {
                var r = Ct.exec(n.slice(e));
                return r
                  ? ((t.m = Lt[r[0].toLowerCase()]), e + r[0].length)
                  : -1;
              },
              B: function (t, n, e) {
                var r = It.exec(n.slice(e));
                return r
                  ? ((t.m = jt[r[0].toLowerCase()]), e + r[0].length)
                  : -1;
              },
              c: function (t, e, r) {
                return Wt(t, n, e, r);
              },
              d: D,
              e: D,
              f: R,
              g: O,
              G: T,
              H: j,
              I: j,
              j: I,
              L: B,
              m: E,
              M: C,
              p: function (t, n, e) {
                var r = y.exec(n.slice(e));
                return r
                  ? ((t.p = _[r[0].toLowerCase()]), e + r[0].length)
                  : -1;
              },
              q: N,
              Q: z,
              s: F,
              S: L,
              u: w,
              U: A,
              V: S,
              w: b,
              W: M,
              x: function (t, n, r) {
                return Wt(t, e, n, r);
              },
              X: function (t, n, e) {
                return Wt(t, u, n, e);
              },
              y: O,
              Y: T,
              Z: k,
              "%": P,
            };
          function zt(t, n) {
            return function (e) {
              var r,
                i,
                o,
                a = [],
                u = -1,
                s = 0,
                c = t.length;
              for (e instanceof Date || (e = new Date(+e)); ++u < c; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(s, u)),
                  null != (i = p[(r = t.charAt(++u))])
                    ? (r = t.charAt(++u))
                    : (i = "e" === r ? " " : "0"),
                  (o = n[r]) && (r = o(e, i)),
                  a.push(r),
                  (s = u + 1));
              return a.push(t.slice(s, u)), a.join("");
            };
          }
          function Ft(t, n) {
            return function (e) {
              var u,
                s,
                h = f(1900, void 0, 1);
              if (Wt(h, t, (e += ""), 0) != e.length) return null;
              if ("Q" in h) return new Date(h.Q);
              if ("s" in h) return new Date(1e3 * h.s + ("L" in h ? h.L : 0));
              if (
                (n && !("Z" in h) && (h.Z = 0),
                "p" in h && (h.H = (h.H % 12) + 12 * h.p),
                void 0 === h.m && (h.m = "q" in h ? h.q : 0),
                "V" in h)
              ) {
                if (h.V < 1 || h.V > 53) return null;
                "w" in h || (h.w = 1),
                  "Z" in h
                    ? ((s = (u = l(f(h.y, 0, 1))).getUTCDay()),
                      (u = s > 4 || 0 === s ? r.l6.ceil(u) : (0, r.l6)(u)),
                      (u = i.Z.offset(u, 7 * (h.V - 1))),
                      (h.y = u.getUTCFullYear()),
                      (h.m = u.getUTCMonth()),
                      (h.d = u.getUTCDate() + ((h.w + 6) % 7)))
                    : ((s = (u = c(f(h.y, 0, 1))).getDay()),
                      (u = s > 4 || 0 === s ? o.wA.ceil(u) : (0, o.wA)(u)),
                      (u = a.Z.offset(u, 7 * (h.V - 1))),
                      (h.y = u.getFullYear()),
                      (h.m = u.getMonth()),
                      (h.d = u.getDate() + ((h.w + 6) % 7)));
              } else
                ("W" in h || "U" in h) &&
                  ("w" in h || (h.w = "u" in h ? h.u % 7 : "W" in h ? 1 : 0),
                  (s =
                    "Z" in h
                      ? l(f(h.y, 0, 1)).getUTCDay()
                      : c(f(h.y, 0, 1)).getDay()),
                  (h.m = 0),
                  (h.d =
                    "W" in h
                      ? ((h.w + 6) % 7) + 7 * h.W - ((s + 5) % 7)
                      : h.w + 7 * h.U - ((s + 6) % 7)));
              return "Z" in h
                ? ((h.H += (h.Z / 100) | 0), (h.M += h.Z % 100), l(h))
                : c(h);
            };
          }
          function Wt(t, n, e, r) {
            for (var i, o, a = 0, u = n.length, s = e.length; a < u; ) {
              if (r >= s) return -1;
              if (37 === (i = n.charCodeAt(a++))) {
                if (
                  ((i = n.charAt(a++)),
                  !(o = Pt[i in p ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0)
                )
                  return -1;
              } else if (i != e.charCodeAt(r++)) return -1;
            }
            return r;
          }
          return (
            (Bt.x = zt(e, Bt)),
            (Bt.X = zt(u, Bt)),
            (Bt.c = zt(n, Bt)),
            (Rt.x = zt(e, Rt)),
            (Rt.X = zt(u, Rt)),
            (Rt.c = zt(n, Rt)),
            {
              format: function (t) {
                var n = zt((t += ""), Bt);
                return (
                  (n.toString = function () {
                    return t;
                  }),
                  n
                );
              },
              parse: function (t) {
                var n = Ft((t += ""), !1);
                return (
                  (n.toString = function () {
                    return t;
                  }),
                  n
                );
              },
              utcFormat: function (t) {
                var n = zt((t += ""), Rt);
                return (
                  (n.toString = function () {
                    return t;
                  }),
                  n
                );
              },
              utcParse: function (t) {
                var n = Ft((t += ""), !0);
                return (
                  (n.toString = function () {
                    return t;
                  }),
                  n
                );
              },
            }
          );
        }
        var p = { "-": "", _: " ", 0: "0" },
          d = /^\s*\d+/,
          v = /^%/,
          g = /[\\^$*+?|[\]().{}]/g;
        function y(t, n, e) {
          var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
          return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
        }
        function _(t) {
          return t.replace(g, "\\$&");
        }
        function x(t) {
          return new RegExp("^(?:" + t.map(_).join("|") + ")", "i");
        }
        function m(t) {
          for (var n = {}, e = -1, r = t.length; ++e < r; )
            n[t[e].toLowerCase()] = e;
          return n;
        }
        function b(t, n, e) {
          var r = d.exec(n.slice(e, e + 1));
          return r ? ((t.w = +r[0]), e + r[0].length) : -1;
        }
        function w(t, n, e) {
          var r = d.exec(n.slice(e, e + 1));
          return r ? ((t.u = +r[0]), e + r[0].length) : -1;
        }
        function A(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.U = +r[0]), e + r[0].length) : -1;
        }
        function S(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.V = +r[0]), e + r[0].length) : -1;
        }
        function M(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.W = +r[0]), e + r[0].length) : -1;
        }
        function T(t, n, e) {
          var r = d.exec(n.slice(e, e + 4));
          return r ? ((t.y = +r[0]), e + r[0].length) : -1;
        }
        function O(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r
            ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
            : -1;
        }
        function k(t, n, e) {
          var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
          return r
            ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
            : -1;
        }
        function N(t, n, e) {
          var r = d.exec(n.slice(e, e + 1));
          return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
        }
        function E(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
        }
        function D(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.d = +r[0]), e + r[0].length) : -1;
        }
        function I(t, n, e) {
          var r = d.exec(n.slice(e, e + 3));
          return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
        }
        function j(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.H = +r[0]), e + r[0].length) : -1;
        }
        function C(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.M = +r[0]), e + r[0].length) : -1;
        }
        function L(t, n, e) {
          var r = d.exec(n.slice(e, e + 2));
          return r ? ((t.S = +r[0]), e + r[0].length) : -1;
        }
        function B(t, n, e) {
          var r = d.exec(n.slice(e, e + 3));
          return r ? ((t.L = +r[0]), e + r[0].length) : -1;
        }
        function R(t, n, e) {
          var r = d.exec(n.slice(e, e + 6));
          return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
        }
        function P(t, n, e) {
          var r = v.exec(n.slice(e, e + 1));
          return r ? e + r[0].length : -1;
        }
        function z(t, n, e) {
          var r = d.exec(n.slice(e));
          return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
        }
        function F(t, n, e) {
          var r = d.exec(n.slice(e));
          return r ? ((t.s = +r[0]), e + r[0].length) : -1;
        }
        function W(t, n) {
          return y(t.getDate(), n, 2);
        }
        function U(t, n) {
          return y(t.getHours(), n, 2);
        }
        function H(t, n) {
          return y(t.getHours() % 12 || 12, n, 2);
        }
        function Y(t, n) {
          return y(1 + a.Z.count((0, u.Z)(t), t), n, 3);
        }
        function q(t, n) {
          return y(t.getMilliseconds(), n, 3);
        }
        function Z(t, n) {
          return q(t, n) + "000";
        }
        function $(t, n) {
          return y(t.getMonth() + 1, n, 2);
        }
        function X(t, n) {
          return y(t.getMinutes(), n, 2);
        }
        function G(t, n) {
          return y(t.getSeconds(), n, 2);
        }
        function V(t) {
          var n = t.getDay();
          return 0 === n ? 7 : n;
        }
        function K(t, n) {
          return y(o.OM.count((0, u.Z)(t) - 1, t), n, 2);
        }
        function J(t) {
          var n = t.getDay();
          return n >= 4 || 0 === n ? (0, o.bL)(t) : o.bL.ceil(t);
        }
        function Q(t, n) {
          return (
            (t = J(t)),
            y(o.bL.count((0, u.Z)(t), t) + (4 === (0, u.Z)(t).getDay()), n, 2)
          );
        }
        function tt(t) {
          return t.getDay();
        }
        function nt(t, n) {
          return y(o.wA.count((0, u.Z)(t) - 1, t), n, 2);
        }
        function et(t, n) {
          return y(t.getFullYear() % 100, n, 2);
        }
        function rt(t, n) {
          return y((t = J(t)).getFullYear() % 100, n, 2);
        }
        function it(t, n) {
          return y(t.getFullYear() % 1e4, n, 4);
        }
        function ot(t, n) {
          var e = t.getDay();
          return y(
            (t =
              e >= 4 || 0 === e ? (0, o.bL)(t) : o.bL.ceil(t)).getFullYear() %
              1e4,
            n,
            4
          );
        }
        function at(t) {
          var n = t.getTimezoneOffset();
          return (
            (n > 0 ? "-" : ((n *= -1), "+")) +
            y((n / 60) | 0, "0", 2) +
            y(n % 60, "0", 2)
          );
        }
        function ut(t, n) {
          return y(t.getUTCDate(), n, 2);
        }
        function st(t, n) {
          return y(t.getUTCHours(), n, 2);
        }
        function ct(t, n) {
          return y(t.getUTCHours() % 12 || 12, n, 2);
        }
        function lt(t, n) {
          return y(1 + i.Z.count((0, s.Z)(t), t), n, 3);
        }
        function ft(t, n) {
          return y(t.getUTCMilliseconds(), n, 3);
        }
        function ht(t, n) {
          return ft(t, n) + "000";
        }
        function pt(t, n) {
          return y(t.getUTCMonth() + 1, n, 2);
        }
        function dt(t, n) {
          return y(t.getUTCMinutes(), n, 2);
        }
        function vt(t, n) {
          return y(t.getUTCSeconds(), n, 2);
        }
        function gt(t) {
          var n = t.getUTCDay();
          return 0 === n ? 7 : n;
        }
        function yt(t, n) {
          return y(r.Ox.count((0, s.Z)(t) - 1, t), n, 2);
        }
        function _t(t) {
          var n = t.getUTCDay();
          return n >= 4 || 0 === n ? (0, r.hB)(t) : r.hB.ceil(t);
        }
        function xt(t, n) {
          return (
            (t = _t(t)),
            y(
              r.hB.count((0, s.Z)(t), t) + (4 === (0, s.Z)(t).getUTCDay()),
              n,
              2
            )
          );
        }
        function mt(t) {
          return t.getUTCDay();
        }
        function bt(t, n) {
          return y(r.l6.count((0, s.Z)(t) - 1, t), n, 2);
        }
        function wt(t, n) {
          return y(t.getUTCFullYear() % 100, n, 2);
        }
        function At(t, n) {
          return y((t = _t(t)).getUTCFullYear() % 100, n, 2);
        }
        function St(t, n) {
          return y(t.getUTCFullYear() % 1e4, n, 4);
        }
        function Mt(t, n) {
          var e = t.getUTCDay();
          return y(
            (t =
              e >= 4 || 0 === e
                ? (0, r.hB)(t)
                : r.hB.ceil(t)).getUTCFullYear() % 1e4,
            n,
            4
          );
        }
        function Tt() {
          return "+0000";
        }
        function Ot() {
          return "%";
        }
        function kt(t) {
          return +t;
        }
        function Nt(t) {
          return Math.floor(+t / 1e3);
        }
      },
      478: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => a });
        var r = e(829),
          i = e(222),
          o = (0, r.Z)(
            function (t) {
              t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setDate(t.getDate() + n);
            },
            function (t, n) {
              return (
                (n -
                  t -
                  (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.yB) /
                i.UD
              );
            },
            function (t) {
              return t.getDate() - 1;
            }
          );
        const a = o;
        o.range;
      },
      222: (t, n, e) => {
        "use strict";
        e.d(n, {
          Ym: () => r,
          yB: () => i,
          Y2: () => o,
          UD: () => a,
          iM: () => u,
        });
        var r = 1e3,
          i = 6e4,
          o = 36e5,
          a = 864e5,
          u = 6048e5;
      },
      829: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => o });
        var r = new Date(),
          i = new Date();
        function o(t, n, e, a) {
          function u(n) {
            return (
              t((n = 0 === arguments.length ? new Date() : new Date(+n))), n
            );
          }
          return (
            (u.floor = function (n) {
              return t((n = new Date(+n))), n;
            }),
            (u.ceil = function (e) {
              return t((e = new Date(e - 1))), n(e, 1), t(e), e;
            }),
            (u.round = function (t) {
              var n = u(t),
                e = u.ceil(t);
              return t - n < e - t ? n : e;
            }),
            (u.offset = function (t, e) {
              return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
            }),
            (u.range = function (e, r, i) {
              var o,
                a = [];
              if (
                ((e = u.ceil(e)),
                (i = null == i ? 1 : Math.floor(i)),
                !(e < r && i > 0))
              )
                return a;
              do {
                a.push((o = new Date(+e))), n(e, i), t(e);
              } while (o < e && e < r);
              return a;
            }),
            (u.filter = function (e) {
              return o(
                function (n) {
                  if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
                },
                function (t, r) {
                  if (t >= t)
                    if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                    else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
                }
              );
            }),
            e &&
              ((u.count = function (n, o) {
                return (
                  r.setTime(+n), i.setTime(+o), t(r), t(i), Math.floor(e(r, i))
                );
              }),
              (u.every = function (t) {
                return (
                  (t = Math.floor(t)),
                  isFinite(t) && t > 0
                    ? t > 1
                      ? u.filter(
                          a
                            ? function (n) {
                                return a(n) % t == 0;
                              }
                            : function (n) {
                                return u.count(0, n) % t == 0;
                              }
                        )
                      : u
                    : null
                );
              })),
            u
          );
        }
      },
      692: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => a });
        var r = e(829),
          i = e(222),
          o = (0, r.Z)(
            function (t) {
              t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setUTCDate(t.getUTCDate() + n);
            },
            function (t, n) {
              return (n - t) / i.UD;
            },
            function (t) {
              return t.getUTCDate() - 1;
            }
          );
        const a = o;
        o.range;
      },
      326: (t, n, e) => {
        "use strict";
        e.d(n, { Ox: () => a, l6: () => u, hB: () => l });
        var r = e(829),
          i = e(222);
        function o(t) {
          return (0, r.Z)(
            function (n) {
              n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
                n.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setUTCDate(t.getUTCDate() + 7 * n);
            },
            function (t, n) {
              return (n - t) / i.iM;
            }
          );
        }
        var a = o(0),
          u = o(1),
          s = o(2),
          c = o(3),
          l = o(4),
          f = o(5),
          h = o(6);
        a.range, u.range, s.range, c.range, l.range, f.range, h.range;
      },
      181: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => o });
        var r = e(829),
          i = (0, r.Z)(
            function (t) {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setUTCFullYear(t.getUTCFullYear() + n);
            },
            function (t, n) {
              return n.getUTCFullYear() - t.getUTCFullYear();
            },
            function (t) {
              return t.getUTCFullYear();
            }
          );
        i.every = function (t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? (0, r.Z)(
                function (n) {
                  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                    n.setUTCMonth(0, 1),
                    n.setUTCHours(0, 0, 0, 0);
                },
                function (n, e) {
                  n.setUTCFullYear(n.getUTCFullYear() + e * t);
                }
              )
            : null;
        };
        const o = i;
        i.range;
      },
      776: (t, n, e) => {
        "use strict";
        e.d(n, { OM: () => a, wA: () => u, bL: () => l });
        var r = e(829),
          i = e(222);
        function o(t) {
          return (0, r.Z)(
            function (n) {
              n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
                n.setHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setDate(t.getDate() + 7 * n);
            },
            function (t, n) {
              return (
                (n -
                  t -
                  (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.yB) /
                i.iM
              );
            }
          );
        }
        var a = o(0),
          u = o(1),
          s = o(2),
          c = o(3),
          l = o(4),
          f = o(5),
          h = o(6);
        a.range, u.range, s.range, c.range, l.range, f.range, h.range;
      },
      209: (t, n, e) => {
        "use strict";
        e.d(n, { Z: () => o });
        var r = e(829),
          i = (0, r.Z)(
            function (t) {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            function (t, n) {
              t.setFullYear(t.getFullYear() + n);
            },
            function (t, n) {
              return n.getFullYear() - t.getFullYear();
            },
            function (t) {
              return t.getFullYear();
            }
          );
        i.every = function (t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? (0, r.Z)(
                function (n) {
                  n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                    n.setMonth(0, 1),
                    n.setHours(0, 0, 0, 0);
                },
                function (n, e) {
                  n.setFullYear(n.getFullYear() + e * t);
                }
              )
            : null;
        };
        const o = i;
        i.range;
      },
      750: (t, n, e) => {
        "use strict";
        e.r(n),
          e.d(n, {
            add: () => A,
            after: () => B,
            ary: () => nn,
            assign: () => Yn,
            assignIn: () => Xn,
            assignInWith: () => Gn,
            assignWith: () => Vn,
            at: () => Ie,
            attempt: () => We,
            before: () => Ue,
            bind: () => Ye,
            bindAll: () => qe,
            bindKey: () => $e,
            camelCase: () => Ur,
            capitalize: () => fr,
            castArray: () => Hr,
            ceil: () => $r,
            chain: () => Xr,
            chunk: () => Kr,
            clamp: () => Qr,
            clone: () => Gi,
            cloneDeep: () => Vi,
            cloneDeepWith: () => Ki,
            cloneWith: () => Ji,
            commit: () => Qi,
            compact: () => to,
            concat: () => no,
            cond: () => Do,
            conforms: () => jo,
            conformsTo: () => Co,
            constant: () => It,
            countBy: () => Yo,
            create: () => qo,
            curry: () => $o,
            curryRight: () => Go,
            debounce: () => Qo,
            deburr: () => yr,
            default: () => Fp,
            defaultTo: () => ta,
            defaults: () => ra,
            defaultsDeep: () => fa,
            defer: () => pa,
            delay: () => da,
            difference: () => ya,
            differenceBy: () => xa,
            differenceWith: () => ma,
            divide: () => ba,
            drop: () => wa,
            dropRight: () => Aa,
            dropRightWhile: () => Ma,
            dropWhile: () => Ta,
            each: () => ka,
            eachRight: () => ja,
            endsWith: () => Ca,
            entries: () => Ba,
            entriesIn: () => Ra,
            eq: () => rn,
            escape: () => Wa,
            escapeRegExp: () => Ya,
            every: () => $a,
            extend: () => Xn,
            extendWith: () => Gn,
            fill: () => Ga,
            filter: () => Ka,
            find: () => nu,
            findIndex: () => tu,
            findKey: () => ru,
            findLast: () => uu,
            findLastIndex: () => au,
            findLastKey: () => su,
            first: () => cu,
            flatMap: () => hu,
            flatMapDeep: () => pu,
            flatMapDepth: () => du,
            flatten: () => Ee,
            flattenDeep: () => vu,
            flattenDepth: () => gu,
            flip: () => yu,
            floor: () => _u,
            flow: () => mu,
            flowRight: () => bu,
            forEach: () => ka,
            forEachRight: () => ja,
            forIn: () => wu,
            forInRight: () => Au,
            forOwn: () => Su,
            forOwnRight: () => Mu,
            fromPairs: () => Tu,
            functions: () => ku,
            functionsIn: () => Nu,
            get: () => Se,
            groupBy: () => Du,
            gt: () => Cu,
            gte: () => Lu,
            has: () => Pu,
            hasIn: () => To,
            head: () => cu,
            identity: () => R,
            inRange: () => Wu,
            includes: () => Zu,
            indexOf: () => Xu,
            initial: () => Gu,
            intersection: () => Qu,
            intersectionBy: () => ts,
            intersectionWith: () => ns,
            invert: () => is,
            invertBy: () => ss,
            invoke: () => fs,
            invokeMap: () => hs,
            isArguments: () => wn,
            isArray: () => _,
            isArrayBuffer: () => ds,
            isArrayLike: () => hn,
            isArrayLikeObject: () => oa,
            isBoolean: () => vs,
            isBuffer: () => On,
            isDate: () => ys,
            isElement: () => _s,
            isEmpty: () => ms,
            isEqual: () => bs,
            isEqualWith: () => ws,
            isError: () => Fe,
            isFinite: () => Ss,
            isFunction: () => P,
            isInteger: () => Ms,
            isLength: () => fn,
            isMap: () => Ui,
            isMatch: () => Ts,
            isMatchWith: () => Os,
            isNaN: () => Ns,
            isNative: () => Ds,
            isNil: () => Is,
            isNull: () => js,
            isNumber: () => ks,
            isObject: () => k,
            isObjectLike: () => d,
            isPlainObject: () => ze,
            isRegExp: () => Ls,
            isSafeInteger: () => Bs,
            isSet: () => Yi,
            isString: () => Uu,
            isSymbol: () => v,
            isTypedArray: () => Ln,
            isUndefined: () => Rs,
            isWeakMap: () => Ps,
            isWeakSet: () => zs,
            iteratee: () => Fs,
            join: () => Us,
            kebabCase: () => Hs,
            keyBy: () => Ys,
            keys: () => Un,
            keysIn: () => $n,
            last: () => _a,
            lastIndexOf: () => $s,
            lodash: () => St,
            lowerCase: () => Xs,
            lowerFirst: () => Gs,
            lt: () => Ks,
            lte: () => Js,
            map: () => fu,
            mapKeys: () => Qs,
            mapValues: () => tc,
            matches: () => nc,
            matchesProperty: () => ec,
            max: () => ic,
            maxBy: () => oc,
            mean: () => sc,
            meanBy: () => cc,
            memoize: () => de,
            merge: () => lc,
            mergeWith: () => la,
            method: () => fc,
            methodOf: () => hc,
            min: () => pc,
            minBy: () => dc,
            mixin: () => vc,
            multiply: () => gc,
            negate: () => yc,
            next: () => mc,
            noop: () => pt,
            now: () => Vo,
            nth: () => wc,
            nthArg: () => Ac,
            omit: () => Tc,
            omitBy: () => Ec,
            once: () => Dc,
            orderBy: () => Cc,
            over: () => Bc,
            overArgs: () => zc,
            overEvery: () => Fc,
            overSome: () => Wc,
            pad: () => ol,
            padEnd: () => al,
            padStart: () => ul,
            parseInt: () => ll,
            partial: () => hl,
            partialRight: () => dl,
            partition: () => vl,
            pick: () => gl,
            pickBy: () => Nc,
            plant: () => yl,
            property: () => No,
            propertyOf: () => _l,
            pull: () => Al,
            pullAll: () => wl,
            pullAllBy: () => Sl,
            pullAllWith: () => Ml,
            pullAt: () => kl,
            random: () => Ll,
            range: () => zl,
            rangeRight: () => Fl,
            rearg: () => Wl,
            reduce: () => Hl,
            reduceRight: () => ql,
            reject: () => Zl,
            remove: () => $l,
            repeat: () => Xl,
            replace: () => Gl,
            rest: () => Vl,
            result: () => Kl,
            reverse: () => Ql,
            round: () => tf,
            sample: () => rf,
            sampleSize: () => sf,
            set: () => cf,
            setWith: () => lf,
            shuffle: () => pf,
            size: () => df,
            slice: () => vf,
            snakeCase: () => gf,
            some: () => _f,
            sortBy: () => xf,
            sortedIndex: () => Sf,
            sortedIndexBy: () => Mf,
            sortedIndexOf: () => Tf,
            sortedLastIndex: () => Of,
            sortedLastIndexBy: () => kf,
            sortedLastIndexOf: () => Nf,
            sortedUniq: () => Df,
            sortedUniqBy: () => If,
            split: () => jf,
            spread: () => Lf,
            startCase: () => Bf,
            startsWith: () => Rf,
            stubArray: () => ci,
            stubFalse: () => An,
            stubObject: () => Pf,
            stubString: () => zf,
            stubTrue: () => Ff,
            subtract: () => Wf,
            sum: () => Uf,
            sumBy: () => Hf,
            tail: () => Yf,
            take: () => qf,
            takeRight: () => Zf,
            takeRightWhile: () => $f,
            takeWhile: () => Xf,
            tap: () => Gf,
            template: () => fh,
            templateSettings: () => eh,
            throttle: () => hh,
            thru: () => ph,
            times: () => gh,
            toArray: () => xc,
            toFinite: () => C,
            toInteger: () => L,
            toIterator: () => yh,
            toJSON: () => xh,
            toLength: () => Xa,
            toLower: () => mh,
            toNumber: () => j,
            toPairs: () => Ba,
            toPairsIn: () => Ra,
            toPath: () => bh,
            toPlainObject: () => ua,
            toSafeInteger: () => wh,
            toString: () => me,
            toUpper: () => Ah,
            transform: () => Sh,
            trim: () => Oh,
            trimEnd: () => kh,
            trimStart: () => Eh,
            truncate: () => Ih,
            unary: () => jh,
            unescape: () => Rh,
            union: () => Fh,
            unionBy: () => Wh,
            unionWith: () => Uh,
            uniq: () => Hh,
            uniqBy: () => Yh,
            uniqWith: () => qh,
            uniqueId: () => $h,
            unset: () => Xh,
            unzip: () => Vh,
            unzipWith: () => Kh,
            update: () => Qh,
            updateWith: () => tp,
            upperCase: () => np,
            upperFirst: () => lr,
            value: () => xh,
            valueOf: () => xh,
            values: () => Yu,
            valuesIn: () => ep,
            without: () => rp,
            words: () => zr,
            wrap: () => ip,
            wrapperAt: () => op,
            wrapperChain: () => ap,
            wrapperCommit: () => Qi,
            wrapperLodash: () => St,
            wrapperNext: () => mc,
            wrapperPlant: () => yl,
            wrapperReverse: () => up,
            wrapperToIterator: () => yh,
            wrapperValue: () => xh,
            xor: () => cp,
            xorBy: () => lp,
            xorWith: () => fp,
            zip: () => hp,
            zipObject: () => dp,
            zipObjectDeep: () => vp,
            zipWith: () => gp,
          });
        const r =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global;
        var i =
          "object" == typeof self && self && self.Object === Object && self;
        const o = r || i || Function("return this")(),
          a = o.Symbol;
        var u = Object.prototype,
          s = u.hasOwnProperty,
          c = u.toString,
          l = a ? a.toStringTag : void 0;
        var f = Object.prototype.toString;
        var h = a ? a.toStringTag : void 0;
        const p = function (t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : h && h in Object(t)
              ? (function (t) {
                  var n = s.call(t, l),
                    e = t[l];
                  try {
                    t[l] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var i = c.call(t);
                  return r && (n ? (t[l] = e) : delete t[l]), i;
                })(t)
              : (function (t) {
                  return f.call(t);
                })(t);
          },
          d = function (t) {
            return null != t && "object" == typeof t;
          },
          v = function (t) {
            return "symbol" == typeof t || (d(t) && "[object Symbol]" == p(t));
          },
          g = function (t) {
            return "number" == typeof t ? t : v(t) ? NaN : +t;
          },
          y = function (t, n) {
            for (
              var e = -1, r = null == t ? 0 : t.length, i = Array(r);
              ++e < r;

            )
              i[e] = n(t[e], e, t);
            return i;
          },
          _ = Array.isArray;
        var x = a ? a.prototype : void 0,
          m = x ? x.toString : void 0;
        const b = function t(n) {
            if ("string" == typeof n) return n;
            if (_(n)) return y(n, t) + "";
            if (v(n)) return m ? m.call(n) : "";
            var e = n + "";
            return "0" == e && 1 / n == -1 / 0 ? "-0" : e;
          },
          w = function (t, n) {
            return function (e, r) {
              var i;
              if (void 0 === e && void 0 === r) return n;
              if ((void 0 !== e && (i = e), void 0 !== r)) {
                if (void 0 === i) return r;
                "string" == typeof e || "string" == typeof r
                  ? ((e = b(e)), (r = b(r)))
                  : ((e = g(e)), (r = g(r))),
                  (i = t(e, r));
              }
              return i;
            };
          },
          A = w(function (t, n) {
            return t + n;
          }, 0);
        var S = /\s/;
        const M = function (t) {
          for (var n = t.length; n-- && S.test(t.charAt(n)); );
          return n;
        };
        var T = /^\s+/;
        const O = function (t) {
            return t ? t.slice(0, M(t) + 1).replace(T, "") : t;
          },
          k = function (t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n);
          };
        var N = /^[-+]0x[0-9a-f]+$/i,
          E = /^0b[01]+$/i,
          D = /^0o[0-7]+$/i,
          I = parseInt;
        const j = function (t) {
          if ("number" == typeof t) return t;
          if (v(t)) return NaN;
          if (k(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = k(n) ? n + "" : n;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = O(t);
          var e = E.test(t);
          return e || D.test(t)
            ? I(t.slice(2), e ? 2 : 8)
            : N.test(t)
            ? NaN
            : +t;
        };
        const C = function (t) {
            return t
              ? Infinity === (t = j(t)) || t === -1 / 0
                ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          },
          L = function (t) {
            var n = C(t),
              e = n % 1;
            return n == n ? (e ? n - e : n) : 0;
          },
          B = function (t, n) {
            if ("function" != typeof n)
              throw new TypeError("Expected a function");
            return (
              (t = L(t)),
              function () {
                if (--t < 1) return n.apply(this, arguments);
              }
            );
          },
          R = function (t) {
            return t;
          },
          P = function (t) {
            if (!k(t)) return !1;
            var n = p(t);
            return (
              "[object Function]" == n ||
              "[object GeneratorFunction]" == n ||
              "[object AsyncFunction]" == n ||
              "[object Proxy]" == n
            );
          },
          z = o["__core-js_shared__"];
        var F,
          W = (F = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + F
            : "";
        var U = Function.prototype.toString;
        const H = function (t) {
          if (null != t) {
            try {
              return U.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
        var Y = /^\[object .+?Constructor\]$/,
          q = Function.prototype,
          Z = Object.prototype,
          $ = q.toString,
          X = Z.hasOwnProperty,
          G = RegExp(
            "^" +
              $.call(X)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        const V = function (t) {
            return (
              !(
                !k(t) ||
                (function (t) {
                  return !!W && W in t;
                })(t)
              ) && (P(t) ? G : Y).test(H(t))
            );
          },
          K = function (t, n) {
            var e = (function (t, n) {
              return null == t ? void 0 : t[n];
            })(t, n);
            return V(e) ? e : void 0;
          },
          J = K(o, "WeakMap"),
          Q = J && new J(),
          tt = Q
            ? function (t, n) {
                return Q.set(t, n), t;
              }
            : R;
        var nt = Object.create;
        const et = (function () {
            function t() {}
            return function (n) {
              if (!k(n)) return {};
              if (nt) return nt(n);
              t.prototype = n;
              var e = new t();
              return (t.prototype = void 0), e;
            };
          })(),
          rt = function (t) {
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(n[0]);
                case 2:
                  return new t(n[0], n[1]);
                case 3:
                  return new t(n[0], n[1], n[2]);
                case 4:
                  return new t(n[0], n[1], n[2], n[3]);
                case 5:
                  return new t(n[0], n[1], n[2], n[3], n[4]);
                case 6:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                case 7:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
              }
              var e = et(t.prototype),
                r = t.apply(e, n);
              return k(r) ? r : e;
            };
          },
          it = function (t, n, e) {
            switch (e.length) {
              case 0:
                return t.call(n);
              case 1:
                return t.call(n, e[0]);
              case 2:
                return t.call(n, e[0], e[1]);
              case 3:
                return t.call(n, e[0], e[1], e[2]);
            }
            return t.apply(n, e);
          };
        var ot = Math.max;
        const at = function (t, n, e, r) {
          for (
            var i = -1,
              o = t.length,
              a = e.length,
              u = -1,
              s = n.length,
              c = ot(o - a, 0),
              l = Array(s + c),
              f = !r;
            ++u < s;

          )
            l[u] = n[u];
          for (; ++i < a; ) (f || i < o) && (l[e[i]] = t[i]);
          for (; c--; ) l[u++] = t[i++];
          return l;
        };
        var ut = Math.max;
        const st = function (t, n, e, r) {
            for (
              var i = -1,
                o = t.length,
                a = -1,
                u = e.length,
                s = -1,
                c = n.length,
                l = ut(o - u, 0),
                f = Array(l + c),
                h = !r;
              ++i < l;

            )
              f[i] = t[i];
            for (var p = i; ++s < c; ) f[p + s] = n[s];
            for (; ++a < u; ) (h || i < o) && (f[p + e[a]] = t[i++]);
            return f;
          },
          ct = function (t, n) {
            for (var e = t.length, r = 0; e--; ) t[e] === n && ++r;
            return r;
          },
          lt = function () {};
        function ft(t) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = 4294967295),
            (this.__views__ = []);
        }
        (ft.prototype = et(lt.prototype)), (ft.prototype.constructor = ft);
        const ht = ft,
          pt = function () {},
          dt = Q
            ? function (t) {
                return Q.get(t);
              }
            : pt,
          vt = {};
        var gt = Object.prototype.hasOwnProperty;
        const yt = function (t) {
          for (
            var n = t.name + "", e = vt[n], r = gt.call(vt, n) ? e.length : 0;
            r--;

          ) {
            var i = e[r],
              o = i.func;
            if (null == o || o == t) return i.name;
          }
          return n;
        };
        function _t(t, n) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = void 0);
        }
        (_t.prototype = et(lt.prototype)), (_t.prototype.constructor = _t);
        const xt = _t,
          mt = function (t, n) {
            var e = -1,
              r = t.length;
            for (n || (n = Array(r)); ++e < r; ) n[e] = t[e];
            return n;
          },
          bt = function (t) {
            if (t instanceof ht) return t.clone();
            var n = new xt(t.__wrapped__, t.__chain__);
            return (
              (n.__actions__ = mt(t.__actions__)),
              (n.__index__ = t.__index__),
              (n.__values__ = t.__values__),
              n
            );
          };
        var wt = Object.prototype.hasOwnProperty;
        function At(t) {
          if (d(t) && !_(t) && !(t instanceof ht)) {
            if (t instanceof xt) return t;
            if (wt.call(t, "__wrapped__")) return bt(t);
          }
          return new xt(t);
        }
        (At.prototype = lt.prototype), (At.prototype.constructor = At);
        const St = At,
          Mt = function (t) {
            var n = yt(t),
              e = St[n];
            if ("function" != typeof e || !(n in ht.prototype)) return !1;
            if (t === e) return !0;
            var r = dt(e);
            return !!r && t === r[0];
          };
        var Tt = Date.now;
        const Ot = function (t) {
            var n = 0,
              e = 0;
            return function () {
              var r = Tt(),
                i = 16 - (r - e);
              if (((e = r), i > 0)) {
                if (++n >= 800) return arguments[0];
              } else n = 0;
              return t.apply(void 0, arguments);
            };
          },
          kt = Ot(tt);
        var Nt = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Et = /,? & /;
        var Dt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
        const It = function (t) {
            return function () {
              return t;
            };
          },
          jt = (function () {
            try {
              var t = K(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })(),
          Ct = Ot(
            jt
              ? function (t, n) {
                  return jt(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: It(n),
                    writable: !0,
                  });
                }
              : R
          ),
          Lt = function (t, n) {
            for (
              var e = -1, r = null == t ? 0 : t.length;
              ++e < r && !1 !== n(t[e], e, t);

            );
            return t;
          },
          Bt = function (t, n, e, r) {
            for (var i = t.length, o = e + (r ? 1 : -1); r ? o-- : ++o < i; )
              if (n(t[o], o, t)) return o;
            return -1;
          },
          Rt = function (t) {
            return t != t;
          },
          Pt = function (t, n, e) {
            return n == n
              ? (function (t, n, e) {
                  for (var r = e - 1, i = t.length; ++r < i; )
                    if (t[r] === n) return r;
                  return -1;
                })(t, n, e)
              : Bt(t, Rt, e);
          },
          zt = function (t, n) {
            return !(null == t || !t.length) && Pt(t, n, 0) > -1;
          };
        var Ft = [
          ["ary", 128],
          ["bind", 1],
          ["bindKey", 2],
          ["curry", 8],
          ["curryRight", 16],
          ["flip", 512],
          ["partial", 32],
          ["partialRight", 64],
          ["rearg", 256],
        ];
        const Wt = function (t, n, e) {
            var r = n + "";
            return Ct(
              t,
              (function (t, n) {
                var e = n.length;
                if (!e) return t;
                var r = e - 1;
                return (
                  (n[r] = (e > 1 ? "& " : "") + n[r]),
                  (n = n.join(e > 2 ? ", " : " ")),
                  t.replace(Dt, "{\n/* [wrapped with " + n + "] */\n")
                );
              })(
                r,
                (function (t, n) {
                  return (
                    Lt(Ft, function (e) {
                      var r = "_." + e[0];
                      n & e[1] && !zt(t, r) && t.push(r);
                    }),
                    t.sort()
                  );
                })(
                  (function (t) {
                    var n = t.match(Nt);
                    return n ? n[1].split(Et) : [];
                  })(r),
                  e
                )
              )
            );
          },
          Ut = function (t, n, e, r, i, o, a, u, s, c) {
            var l = 8 & n;
            (n |= l ? 32 : 64), 4 & (n &= ~(l ? 64 : 32)) || (n &= -4);
            var f = [
                t,
                n,
                i,
                l ? o : void 0,
                l ? a : void 0,
                l ? void 0 : o,
                l ? void 0 : a,
                u,
                s,
                c,
              ],
              h = e.apply(void 0, f);
            return Mt(t) && kt(h, f), (h.placeholder = r), Wt(h, t, n);
          },
          Ht = function (t) {
            return t.placeholder;
          };
        var Yt = /^(?:0|[1-9]\d*)$/;
        const qt = function (t, n) {
          var e = typeof t;
          return (
            !!(n = null == n ? 9007199254740991 : n) &&
            ("number" == e || ("symbol" != e && Yt.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < n
          );
        };
        var Zt = Math.min;
        const $t = function (t, n) {
          for (var e = t.length, r = Zt(n.length, e), i = mt(t); r--; ) {
            var o = n[r];
            t[r] = qt(o, e) ? i[o] : void 0;
          }
          return t;
        };
        var Xt = "__lodash_placeholder__";
        const Gt = function (t, n) {
            for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
              var a = t[e];
              (a !== n && a !== Xt) || ((t[e] = Xt), (o[i++] = e));
            }
            return o;
          },
          Vt = function t(n, e, r, i, a, u, s, c, l, f) {
            var h = 128 & e,
              p = 1 & e,
              d = 2 & e,
              v = 24 & e,
              g = 512 & e,
              y = d ? void 0 : rt(n);
            return function _() {
              for (var x = arguments.length, m = Array(x), b = x; b--; )
                m[b] = arguments[b];
              if (v)
                var w = Ht(_),
                  A = ct(m, w);
              if (
                (i && (m = at(m, i, a, v)),
                u && (m = st(m, u, s, v)),
                (x -= A),
                v && x < f)
              ) {
                var S = Gt(m, w);
                return Ut(n, e, t, _.placeholder, r, m, S, c, l, f - x);
              }
              var M = p ? r : this,
                T = d ? M[n] : n;
              return (
                (x = m.length),
                c ? (m = $t(m, c)) : g && x > 1 && m.reverse(),
                h && l < x && (m.length = l),
                this && this !== o && this instanceof _ && (T = y || rt(T)),
                T.apply(M, m)
              );
            };
          };
        var Kt = "__lodash_placeholder__",
          Jt = Math.min;
        var Qt = Math.max;
        const tn = function (t, n, e, r, i, a, u, s) {
            var c = 2 & n;
            if (!c && "function" != typeof t)
              throw new TypeError("Expected a function");
            var l = r ? r.length : 0;
            if (
              (l || ((n &= -97), (r = i = void 0)),
              (u = void 0 === u ? u : Qt(L(u), 0)),
              (s = void 0 === s ? s : L(s)),
              (l -= i ? i.length : 0),
              64 & n)
            ) {
              var f = r,
                h = i;
              r = i = void 0;
            }
            var p = c ? void 0 : dt(t),
              d = [t, n, e, r, i, f, h, a, u, s];
            if (
              (p &&
                (function (t, n) {
                  var e = t[1],
                    r = n[1],
                    i = e | r,
                    o = i < 131,
                    a =
                      (128 == r && 8 == e) ||
                      (128 == r && 256 == e && t[7].length <= n[8]) ||
                      (384 == r && n[7].length <= n[8] && 8 == e);
                  if (!o && !a) return t;
                  1 & r && ((t[2] = n[2]), (i |= 1 & e ? 0 : 4));
                  var u = n[3];
                  if (u) {
                    var s = t[3];
                    (t[3] = s ? at(s, u, n[4]) : u),
                      (t[4] = s ? Gt(t[3], Kt) : n[4]);
                  }
                  (u = n[5]) &&
                    ((s = t[5]),
                    (t[5] = s ? st(s, u, n[6]) : u),
                    (t[6] = s ? Gt(t[5], Kt) : n[6])),
                    (u = n[7]) && (t[7] = u),
                    128 & r && (t[8] = null == t[8] ? n[8] : Jt(t[8], n[8])),
                    null == t[9] && (t[9] = n[9]),
                    (t[0] = n[0]),
                    (t[1] = i);
                })(d, p),
              (t = d[0]),
              (n = d[1]),
              (e = d[2]),
              (r = d[3]),
              (i = d[4]),
              !(s = d[9] =
                void 0 === d[9] ? (c ? 0 : t.length) : Qt(d[9] - l, 0)) &&
                24 & n &&
                (n &= -25),
              n && 1 != n)
            )
              v =
                8 == n || 16 == n
                  ? (function (t, n, e) {
                      var r = rt(t);
                      return function i() {
                        for (
                          var a = arguments.length,
                            u = Array(a),
                            s = a,
                            c = Ht(i);
                          s--;

                        )
                          u[s] = arguments[s];
                        var l =
                          a < 3 && u[0] !== c && u[a - 1] !== c ? [] : Gt(u, c);
                        return (a -= l.length) < e
                          ? Ut(
                              t,
                              n,
                              Vt,
                              i.placeholder,
                              void 0,
                              u,
                              l,
                              void 0,
                              void 0,
                              e - a
                            )
                          : it(
                              this && this !== o && this instanceof i ? r : t,
                              this,
                              u
                            );
                      };
                    })(t, n, s)
                  : (32 != n && 33 != n) || i.length
                  ? Vt.apply(void 0, d)
                  : (function (t, n, e, r) {
                      var i = 1 & n,
                        a = rt(t);
                      return function n() {
                        for (
                          var u = -1,
                            s = arguments.length,
                            c = -1,
                            l = r.length,
                            f = Array(l + s),
                            h = this && this !== o && this instanceof n ? a : t;
                          ++c < l;

                        )
                          f[c] = r[c];
                        for (; s--; ) f[c++] = arguments[++u];
                        return it(h, i ? e : this, f);
                      };
                    })(t, n, e, r);
            else
              var v = (function (t, n, e) {
                var r = 1 & n,
                  i = rt(t);
                return function n() {
                  return (this && this !== o && this instanceof n
                    ? i
                    : t
                  ).apply(r ? e : this, arguments);
                };
              })(t, n, e);
            return Wt((p ? tt : kt)(v, d), t, n);
          },
          nn = function (t, n, e) {
            return (
              (n = e ? void 0 : n),
              (n = t && null == n ? t.length : n),
              tn(t, 128, void 0, void 0, void 0, void 0, n)
            );
          },
          en = function (t, n, e) {
            "__proto__" == n && jt
              ? jt(t, n, {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0,
                })
              : (t[n] = e);
          },
          rn = function (t, n) {
            return t === n || (t != t && n != n);
          };
        var on = Object.prototype.hasOwnProperty;
        const an = function (t, n, e) {
            var r = t[n];
            (on.call(t, n) && rn(r, e) && (void 0 !== e || n in t)) ||
              en(t, n, e);
          },
          un = function (t, n, e, r) {
            var i = !e;
            e || (e = {});
            for (var o = -1, a = n.length; ++o < a; ) {
              var u = n[o],
                s = r ? r(e[u], t[u], u, e, t) : void 0;
              void 0 === s && (s = t[u]), i ? en(e, u, s) : an(e, u, s);
            }
            return e;
          };
        var sn = Math.max;
        const cn = function (t, n, e) {
            return (
              (n = sn(void 0 === n ? t.length - 1 : n, 0)),
              function () {
                for (
                  var r = arguments,
                    i = -1,
                    o = sn(r.length - n, 0),
                    a = Array(o);
                  ++i < o;

                )
                  a[i] = r[n + i];
                i = -1;
                for (var u = Array(n + 1); ++i < n; ) u[i] = r[i];
                return (u[n] = e(a)), it(t, this, u);
              }
            );
          },
          ln = function (t, n) {
            return Ct(cn(t, n, R), t + "");
          },
          fn = function (t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          },
          hn = function (t) {
            return null != t && fn(t.length) && !P(t);
          },
          pn = function (t, n, e) {
            if (!k(e)) return !1;
            var r = typeof n;
            return (
              !!("number" == r
                ? hn(e) && qt(n, e.length)
                : "string" == r && n in e) && rn(e[n], t)
            );
          },
          dn = function (t) {
            return ln(function (n, e) {
              var r = -1,
                i = e.length,
                o = i > 1 ? e[i - 1] : void 0,
                a = i > 2 ? e[2] : void 0;
              for (
                o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0,
                  a && pn(e[0], e[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
                  n = Object(n);
                ++r < i;

              ) {
                var u = e[r];
                u && t(n, u, r, o);
              }
              return n;
            });
          };
        var vn = Object.prototype;
        const gn = function (t) {
            var n = t && t.constructor;
            return t === (("function" == typeof n && n.prototype) || vn);
          },
          yn = function (t, n) {
            for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
            return r;
          },
          _n = function (t) {
            return d(t) && "[object Arguments]" == p(t);
          };
        var xn = Object.prototype,
          mn = xn.hasOwnProperty,
          bn = xn.propertyIsEnumerable;
        const wn = _n(
            (function () {
              return arguments;
            })()
          )
            ? _n
            : function (t) {
                return d(t) && mn.call(t, "callee") && !bn.call(t, "callee");
              },
          An = function () {
            return !1;
          };
        var Sn =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          Mn =
            Sn &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          Tn = Mn && Mn.exports === Sn ? o.Buffer : void 0;
        const On = (Tn ? Tn.isBuffer : void 0) || An;
        var kn = {};
        (kn["[object Float32Array]"] = kn["[object Float64Array]"] = kn[
          "[object Int8Array]"
        ] = kn["[object Int16Array]"] = kn["[object Int32Array]"] = kn[
          "[object Uint8Array]"
        ] = kn["[object Uint8ClampedArray]"] = kn["[object Uint16Array]"] = kn[
          "[object Uint32Array]"
        ] = !0),
          (kn["[object Arguments]"] = kn["[object Array]"] = kn[
            "[object ArrayBuffer]"
          ] = kn["[object Boolean]"] = kn["[object DataView]"] = kn[
            "[object Date]"
          ] = kn["[object Error]"] = kn["[object Function]"] = kn[
            "[object Map]"
          ] = kn["[object Number]"] = kn["[object Object]"] = kn[
            "[object RegExp]"
          ] = kn["[object Set]"] = kn["[object String]"] = kn[
            "[object WeakMap]"
          ] = !1);
        const Nn = function (t) {
          return function (n) {
            return t(n);
          };
        };
        var En =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          Dn =
            En &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          In = Dn && Dn.exports === En && r.process;
        const jn = (function () {
          try {
            return (
              (Dn && Dn.require && Dn.require("util").types) ||
              (In && In.binding && In.binding("util"))
            );
          } catch (t) {}
        })();
        var Cn = jn && jn.isTypedArray;
        const Ln = Cn
          ? Nn(Cn)
          : function (t) {
              return d(t) && fn(t.length) && !!kn[p(t)];
            };
        var Bn = Object.prototype.hasOwnProperty;
        const Rn = function (t, n) {
            var e = _(t),
              r = !e && wn(t),
              i = !e && !r && On(t),
              o = !e && !r && !i && Ln(t),
              a = e || r || i || o,
              u = a ? yn(t.length, String) : [],
              s = u.length;
            for (var c in t)
              (!n && !Bn.call(t, c)) ||
                (a &&
                  ("length" == c ||
                    (i && ("offset" == c || "parent" == c)) ||
                    (o &&
                      ("buffer" == c ||
                        "byteLength" == c ||
                        "byteOffset" == c)) ||
                    qt(c, s))) ||
                u.push(c);
            return u;
          },
          Pn = function (t, n) {
            return function (e) {
              return t(n(e));
            };
          },
          zn = Pn(Object.keys, Object);
        var Fn = Object.prototype.hasOwnProperty;
        const Wn = function (t) {
            if (!gn(t)) return zn(t);
            var n = [];
            for (var e in Object(t))
              Fn.call(t, e) && "constructor" != e && n.push(e);
            return n;
          },
          Un = function (t) {
            return hn(t) ? Rn(t) : Wn(t);
          };
        var Hn = Object.prototype.hasOwnProperty;
        const Yn = dn(function (t, n) {
          if (gn(n) || hn(n)) un(n, Un(n), t);
          else for (var e in n) Hn.call(n, e) && an(t, e, n[e]);
        });
        var qn = Object.prototype.hasOwnProperty;
        const Zn = function (t) {
            if (!k(t))
              return (function (t) {
                var n = [];
                if (null != t) for (var e in Object(t)) n.push(e);
                return n;
              })(t);
            var n = gn(t),
              e = [];
            for (var r in t)
              ("constructor" != r || (!n && qn.call(t, r))) && e.push(r);
            return e;
          },
          $n = function (t) {
            return hn(t) ? Rn(t, !0) : Zn(t);
          },
          Xn = dn(function (t, n) {
            un(n, $n(n), t);
          }),
          Gn = dn(function (t, n, e, r) {
            un(n, $n(n), t, r);
          }),
          Vn = dn(function (t, n, e, r) {
            un(n, Un(n), t, r);
          });
        var Kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Jn = /^\w*$/;
        const Qn = function (t, n) {
            if (_(t)) return !1;
            var e = typeof t;
            return (
              !(
                "number" != e &&
                "symbol" != e &&
                "boolean" != e &&
                null != t &&
                !v(t)
              ) ||
              Jn.test(t) ||
              !Kn.test(t) ||
              (null != n && t in Object(n))
            );
          },
          te = K(Object, "create");
        var ne = Object.prototype.hasOwnProperty;
        var ee = Object.prototype.hasOwnProperty;
        function re(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (re.prototype.clear = function () {
          (this.__data__ = te ? te(null) : {}), (this.size = 0);
        }),
          (re.prototype.delete = function (t) {
            var n = this.has(t) && delete this.__data__[t];
            return (this.size -= n ? 1 : 0), n;
          }),
          (re.prototype.get = function (t) {
            var n = this.__data__;
            if (te) {
              var e = n[t];
              return "__lodash_hash_undefined__" === e ? void 0 : e;
            }
            return ne.call(n, t) ? n[t] : void 0;
          }),
          (re.prototype.has = function (t) {
            var n = this.__data__;
            return te ? void 0 !== n[t] : ee.call(n, t);
          }),
          (re.prototype.set = function (t, n) {
            var e = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (e[t] = te && void 0 === n ? "__lodash_hash_undefined__" : n),
              this
            );
          });
        const ie = re,
          oe = function (t, n) {
            for (var e = t.length; e--; ) if (rn(t[e][0], n)) return e;
            return -1;
          };
        var ae = Array.prototype.splice;
        function ue(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (ue.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
          (ue.prototype.delete = function (t) {
            var n = this.__data__,
              e = oe(n, t);
            return !(
              e < 0 ||
              (e == n.length - 1 ? n.pop() : ae.call(n, e, 1), --this.size, 0)
            );
          }),
          (ue.prototype.get = function (t) {
            var n = this.__data__,
              e = oe(n, t);
            return e < 0 ? void 0 : n[e][1];
          }),
          (ue.prototype.has = function (t) {
            return oe(this.__data__, t) > -1;
          }),
          (ue.prototype.set = function (t, n) {
            var e = this.__data__,
              r = oe(e, t);
            return r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n), this;
          });
        const se = ue,
          ce = K(o, "Map"),
          le = function (t, n) {
            var e,
              r,
              i = t.__data__;
            return (
              "string" == (r = typeof (e = n)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== e
                : null === e
            )
              ? i["string" == typeof n ? "string" : "hash"]
              : i.map;
          };
        function fe(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (fe.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ie(),
              map: new (ce || se)(),
              string: new ie(),
            });
        }),
          (fe.prototype.delete = function (t) {
            var n = le(this, t).delete(t);
            return (this.size -= n ? 1 : 0), n;
          }),
          (fe.prototype.get = function (t) {
            return le(this, t).get(t);
          }),
          (fe.prototype.has = function (t) {
            return le(this, t).has(t);
          }),
          (fe.prototype.set = function (t, n) {
            var e = le(this, t),
              r = e.size;
            return e.set(t, n), (this.size += e.size == r ? 0 : 1), this;
          });
        const he = fe;
        function pe(t, n) {
          if ("function" != typeof t || (null != n && "function" != typeof n))
            throw new TypeError("Expected a function");
          var e = function () {
            var r = arguments,
              i = n ? n.apply(this, r) : r[0],
              o = e.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return (e.cache = o.set(i, a) || o), a;
          };
          return (e.cache = new (pe.Cache || he)()), e;
        }
        pe.Cache = he;
        const de = pe;
        var ve = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          ge = /\\(\\)?/g;
        const ye =
          ((_e = de(
            function (t) {
              var n = [];
              return (
                46 === t.charCodeAt(0) && n.push(""),
                t.replace(ve, function (t, e, r, i) {
                  n.push(r ? i.replace(ge, "$1") : e || t);
                }),
                n
              );
            },
            function (t) {
              return 500 === xe.size && xe.clear(), t;
            }
          )),
          (xe = _e.cache),
          _e);
        var _e, xe;
        const me = function (t) {
            return null == t ? "" : b(t);
          },
          be = function (t, n) {
            return _(t) ? t : Qn(t, n) ? [t] : ye(me(t));
          },
          we = function (t) {
            if ("string" == typeof t || v(t)) return t;
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
          },
          Ae = function (t, n) {
            for (var e = 0, r = (n = be(n, t)).length; null != t && e < r; )
              t = t[we(n[e++])];
            return e && e == r ? t : void 0;
          },
          Se = function (t, n, e) {
            var r = null == t ? void 0 : Ae(t, n);
            return void 0 === r ? e : r;
          },
          Me = function (t, n) {
            for (
              var e = -1, r = n.length, i = Array(r), o = null == t;
              ++e < r;

            )
              i[e] = o ? void 0 : Se(t, n[e]);
            return i;
          },
          Te = function (t, n) {
            for (var e = -1, r = n.length, i = t.length; ++e < r; )
              t[i + e] = n[e];
            return t;
          };
        var Oe = a ? a.isConcatSpreadable : void 0;
        const ke = function (t) {
            return _(t) || wn(t) || !!(Oe && t && t[Oe]);
          },
          Ne = function t(n, e, r, i, o) {
            var a = -1,
              u = n.length;
            for (r || (r = ke), o || (o = []); ++a < u; ) {
              var s = n[a];
              e > 0 && r(s)
                ? e > 1
                  ? t(s, e - 1, r, i, o)
                  : Te(o, s)
                : i || (o[o.length] = s);
            }
            return o;
          },
          Ee = function (t) {
            return null != t && t.length ? Ne(t, 1) : [];
          },
          De = function (t) {
            return Ct(cn(t, void 0, Ee), t + "");
          },
          Ie = De(Me),
          je = Pn(Object.getPrototypeOf, Object);
        var Ce = Function.prototype,
          Le = Object.prototype,
          Be = Ce.toString,
          Re = Le.hasOwnProperty,
          Pe = Be.call(Object);
        const ze = function (t) {
            if (!d(t) || "[object Object]" != p(t)) return !1;
            var n = je(t);
            if (null === n) return !0;
            var e = Re.call(n, "constructor") && n.constructor;
            return "function" == typeof e && e instanceof e && Be.call(e) == Pe;
          },
          Fe = function (t) {
            if (!d(t)) return !1;
            var n = p(t);
            return (
              "[object Error]" == n ||
              "[object DOMException]" == n ||
              ("string" == typeof t.message &&
                "string" == typeof t.name &&
                !ze(t))
            );
          },
          We = ln(function (t, n) {
            try {
              return it(t, void 0, n);
            } catch (t) {
              return Fe(t) ? t : new Error(t);
            }
          }),
          Ue = function (t, n) {
            var e;
            if ("function" != typeof n)
              throw new TypeError("Expected a function");
            return (
              (t = L(t)),
              function () {
                return (
                  --t > 0 && (e = n.apply(this, arguments)),
                  t <= 1 && (n = void 0),
                  e
                );
              }
            );
          };
        var He = ln(function (t, n, e) {
          var r = 1;
          if (e.length) {
            var i = Gt(e, Ht(He));
            r |= 32;
          }
          return tn(t, r, n, e, i);
        });
        He.placeholder = {};
        const Ye = He,
          qe = De(function (t, n) {
            return (
              Lt(n, function (n) {
                (n = we(n)), en(t, n, Ye(t[n], t));
              }),
              t
            );
          });
        var Ze = ln(function (t, n, e) {
          var r = 3;
          if (e.length) {
            var i = Gt(e, Ht(Ze));
            r |= 32;
          }
          return tn(n, r, t, e, i);
        });
        Ze.placeholder = {};
        const $e = Ze,
          Xe = function (t, n, e) {
            var r = -1,
              i = t.length;
            n < 0 && (n = -n > i ? 0 : i + n),
              (e = e > i ? i : e) < 0 && (e += i),
              (i = n > e ? 0 : (e - n) >>> 0),
              (n >>>= 0);
            for (var o = Array(i); ++r < i; ) o[r] = t[r + n];
            return o;
          },
          Ge = function (t, n, e) {
            var r = t.length;
            return (e = void 0 === e ? r : e), !n && e >= r ? t : Xe(t, n, e);
          };
        var Ve = RegExp(
          "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
        const Ke = function (t) {
          return Ve.test(t);
        };
        var Je = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
          Qe = "\\ud83c[\\udffb-\\udfff]",
          tr = "[^\\ud800-\\udfff]",
          nr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          er = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          rr = "(?:" + Je + "|" + Qe + ")?",
          ir = "[\\ufe0e\\ufe0f]?",
          or =
            ir +
            rr +
            "(?:\\u200d(?:" +
            [tr, nr, er].join("|") +
            ")" +
            ir +
            rr +
            ")*",
          ar =
            "(?:" +
            [tr + Je + "?", Je, nr, er, "[\\ud800-\\udfff]"].join("|") +
            ")",
          ur = RegExp(Qe + "(?=" + Qe + ")|" + ar + or, "g");
        const sr = function (t) {
            return Ke(t)
              ? (function (t) {
                  return t.match(ur) || [];
                })(t)
              : (function (t) {
                  return t.split("");
                })(t);
          },
          cr = function (t) {
            return function (n) {
              n = me(n);
              var e = Ke(n) ? sr(n) : void 0,
                r = e ? e[0] : n.charAt(0),
                i = e ? Ge(e, 1).join("") : n.slice(1);
              return r[t]() + i;
            };
          },
          lr = cr("toUpperCase"),
          fr = function (t) {
            return lr(me(t).toLowerCase());
          },
          hr = function (t, n, e, r) {
            var i = -1,
              o = null == t ? 0 : t.length;
            for (r && o && (e = t[++i]); ++i < o; ) e = n(e, t[i], i, t);
            return e;
          },
          pr = function (t) {
            return function (n) {
              return null == t ? void 0 : t[n];
            };
          },
          dr = pr({
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          });
        var vr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          gr = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        const yr = function (t) {
          return (t = me(t)) && t.replace(vr, dr).replace(gr, "");
        };
        var _r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var xr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var mr = "a-z\\xdf-\\xf6\\xf8-\\xff",
          br = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          wr =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          Ar = "[" + wr + "]",
          Sr = "\\d+",
          Mr = "[" + mr + "]",
          Tr =
            "[^\\ud800-\\udfff" + wr + Sr + "\\u2700-\\u27bf" + mr + br + "]",
          Or = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          kr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Nr = "[" + br + "]",
          Er = "(?:" + Mr + "|" + Tr + ")",
          Dr = "(?:" + Nr + "|" + Tr + ")",
          Ir = "(?:['’](?:d|ll|m|re|s|t|ve))?",
          jr = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
          Cr =
            "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
          Lr = "[\\ufe0e\\ufe0f]?",
          Br =
            Lr +
            Cr +
            "(?:\\u200d(?:" +
            ["[^\\ud800-\\udfff]", Or, kr].join("|") +
            ")" +
            Lr +
            Cr +
            ")*",
          Rr = "(?:" + ["[\\u2700-\\u27bf]", Or, kr].join("|") + ")" + Br,
          Pr = RegExp(
            [
              Nr + "?" + Mr + "+" + Ir + "(?=" + [Ar, Nr, "$"].join("|") + ")",
              Dr + "+" + jr + "(?=" + [Ar, Nr + Er, "$"].join("|") + ")",
              Nr + "?" + Er + "+" + Ir,
              Nr + "+" + jr,
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              Sr,
              Rr,
            ].join("|"),
            "g"
          );
        const zr = function (t, n, e) {
          return (
            (t = me(t)),
            void 0 === (n = e ? void 0 : n)
              ? (function (t) {
                  return xr.test(t);
                })(t)
                ? (function (t) {
                    return t.match(Pr) || [];
                  })(t)
                : (function (t) {
                    return t.match(_r) || [];
                  })(t)
              : t.match(n) || []
          );
        };
        var Fr = RegExp("['’]", "g");
        const Wr = function (t) {
            return function (n) {
              return hr(zr(yr(n).replace(Fr, "")), t, "");
            };
          },
          Ur = Wr(function (t, n, e) {
            return (n = n.toLowerCase()), t + (e ? fr(n) : n);
          }),
          Hr = function () {
            if (!arguments.length) return [];
            var t = arguments[0];
            return _(t) ? t : [t];
          };
        var Yr = o.isFinite,
          qr = Math.min;
        const Zr = function (t) {
            var n = Math[t];
            return function (t, e) {
              if (((t = j(t)), (e = null == e ? 0 : qr(L(e), 292)) && Yr(t))) {
                var r = (me(t) + "e").split("e"),
                  i = n(r[0] + "e" + (+r[1] + e));
                return +((r = (me(i) + "e").split("e"))[0] + "e" + (+r[1] - e));
              }
              return n(t);
            };
          },
          $r = Zr("ceil"),
          Xr = function (t) {
            var n = St(t);
            return (n.__chain__ = !0), n;
          };
        var Gr = Math.ceil,
          Vr = Math.max;
        const Kr = function (t, n, e) {
            n = (e ? pn(t, n, e) : void 0 === n) ? 1 : Vr(L(n), 0);
            var r = null == t ? 0 : t.length;
            if (!r || n < 1) return [];
            for (var i = 0, o = 0, a = Array(Gr(r / n)); i < r; )
              a[o++] = Xe(t, i, (i += n));
            return a;
          },
          Jr = function (t, n, e) {
            return (
              t == t &&
                (void 0 !== e && (t = t <= e ? t : e),
                void 0 !== n && (t = t >= n ? t : n)),
              t
            );
          },
          Qr = function (t, n, e) {
            return (
              void 0 === e && ((e = n), (n = void 0)),
              void 0 !== e && (e = (e = j(e)) == e ? e : 0),
              void 0 !== n && (n = (n = j(n)) == n ? n : 0),
              Jr(j(t), n, e)
            );
          };
        function ti(t) {
          var n = (this.__data__ = new se(t));
          this.size = n.size;
        }
        (ti.prototype.clear = function () {
          (this.__data__ = new se()), (this.size = 0);
        }),
          (ti.prototype.delete = function (t) {
            var n = this.__data__,
              e = n.delete(t);
            return (this.size = n.size), e;
          }),
          (ti.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (ti.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (ti.prototype.set = function (t, n) {
            var e = this.__data__;
            if (e instanceof se) {
              var r = e.__data__;
              if (!ce || r.length < 199)
                return r.push([t, n]), (this.size = ++e.size), this;
              e = this.__data__ = new he(r);
            }
            return e.set(t, n), (this.size = e.size), this;
          });
        const ni = ti,
          ei = function (t, n) {
            return t && un(n, Un(n), t);
          };
        var ri =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          ii =
            ri &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          oi = ii && ii.exports === ri ? o.Buffer : void 0,
          ai = oi ? oi.allocUnsafe : void 0;
        const ui = function (t, n) {
            if (n) return t.slice();
            var e = t.length,
              r = ai ? ai(e) : new t.constructor(e);
            return t.copy(r), r;
          },
          si = function (t, n) {
            for (
              var e = -1, r = null == t ? 0 : t.length, i = 0, o = [];
              ++e < r;

            ) {
              var a = t[e];
              n(a, e, t) && (o[i++] = a);
            }
            return o;
          },
          ci = function () {
            return [];
          };
        var li = Object.prototype.propertyIsEnumerable,
          fi = Object.getOwnPropertySymbols;
        const hi = fi
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    si(fi(t), function (n) {
                      return li.call(t, n);
                    }));
              }
            : ci,
          pi = Object.getOwnPropertySymbols
            ? function (t) {
                for (var n = []; t; ) Te(n, hi(t)), (t = je(t));
                return n;
              }
            : ci,
          di = function (t, n, e) {
            var r = n(t);
            return _(t) ? r : Te(r, e(t));
          },
          vi = function (t) {
            return di(t, Un, hi);
          },
          gi = function (t) {
            return di(t, $n, pi);
          },
          yi = K(o, "DataView"),
          _i = K(o, "Promise"),
          xi = K(o, "Set");
        var mi = "[object Map]",
          bi = "[object Promise]",
          wi = "[object Set]",
          Ai = "[object WeakMap]",
          Si = "[object DataView]",
          Mi = H(yi),
          Ti = H(ce),
          Oi = H(_i),
          ki = H(xi),
          Ni = H(J),
          Ei = p;
        ((yi && Ei(new yi(new ArrayBuffer(1))) != Si) ||
          (ce && Ei(new ce()) != mi) ||
          (_i && Ei(_i.resolve()) != bi) ||
          (xi && Ei(new xi()) != wi) ||
          (J && Ei(new J()) != Ai)) &&
          (Ei = function (t) {
            var n = p(t),
              e = "[object Object]" == n ? t.constructor : void 0,
              r = e ? H(e) : "";
            if (r)
              switch (r) {
                case Mi:
                  return Si;
                case Ti:
                  return mi;
                case Oi:
                  return bi;
                case ki:
                  return wi;
                case Ni:
                  return Ai;
              }
            return n;
          });
        const Di = Ei;
        var Ii = Object.prototype.hasOwnProperty;
        const ji = o.Uint8Array,
          Ci = function (t) {
            var n = new t.constructor(t.byteLength);
            return new ji(n).set(new ji(t)), n;
          };
        var Li = /\w*$/;
        var Bi = a ? a.prototype : void 0,
          Ri = Bi ? Bi.valueOf : void 0;
        const Pi = function (t, n) {
            var e = n ? Ci(t.buffer) : t.buffer;
            return new t.constructor(e, t.byteOffset, t.length);
          },
          zi = function (t, n, e) {
            var r,
              i = t.constructor;
            switch (n) {
              case "[object ArrayBuffer]":
                return Ci(t);
              case "[object Boolean]":
              case "[object Date]":
                return new i(+t);
              case "[object DataView]":
                return (function (t, n) {
                  var e = n ? Ci(t.buffer) : t.buffer;
                  return new t.constructor(e, t.byteOffset, t.byteLength);
                })(t, e);
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return Pi(t, e);
              case "[object Map]":
                return new i();
              case "[object Number]":
              case "[object String]":
                return new i(t);
              case "[object RegExp]":
                return (function (t) {
                  var n = new t.constructor(t.source, Li.exec(t));
                  return (n.lastIndex = t.lastIndex), n;
                })(t);
              case "[object Set]":
                return new i();
              case "[object Symbol]":
                return (r = t), Ri ? Object(Ri.call(r)) : {};
            }
          },
          Fi = function (t) {
            return "function" != typeof t.constructor || gn(t) ? {} : et(je(t));
          };
        var Wi = jn && jn.isMap;
        const Ui = Wi
          ? Nn(Wi)
          : function (t) {
              return d(t) && "[object Map]" == Di(t);
            };
        var Hi = jn && jn.isSet;
        const Yi = Hi
          ? Nn(Hi)
          : function (t) {
              return d(t) && "[object Set]" == Di(t);
            };
        var qi = "[object Arguments]",
          Zi = "[object Function]",
          $i = {};
        ($i[qi] = $i["[object Array]"] = $i["[object ArrayBuffer]"] = $i[
          "[object DataView]"
        ] = $i["[object Boolean]"] = $i["[object Date]"] = $i[
          "[object Float32Array]"
        ] = $i["[object Float64Array]"] = $i["[object Int8Array]"] = $i[
          "[object Int16Array]"
        ] = $i["[object Int32Array]"] = $i["[object Map]"] = $i[
          "[object Number]"
        ] = $i["[object Object]"] = $i["[object RegExp]"] = $i[
          "[object Set]"
        ] = $i["[object String]"] = $i["[object Symbol]"] = $i[
          "[object Uint8Array]"
        ] = $i["[object Uint8ClampedArray]"] = $i["[object Uint16Array]"] = $i[
          "[object Uint32Array]"
        ] = !0),
          ($i["[object Error]"] = $i[Zi] = $i["[object WeakMap]"] = !1);
        const Xi = function t(n, e, r, i, o, a) {
            var u,
              s = 1 & e,
              c = 2 & e,
              l = 4 & e;
            if ((r && (u = o ? r(n, i, o, a) : r(n)), void 0 !== u)) return u;
            if (!k(n)) return n;
            var f = _(n);
            if (f) {
              if (
                ((u = (function (t) {
                  var n = t.length,
                    e = new t.constructor(n);
                  return (
                    n &&
                      "string" == typeof t[0] &&
                      Ii.call(t, "index") &&
                      ((e.index = t.index), (e.input = t.input)),
                    e
                  );
                })(n)),
                !s)
              )
                return mt(n, u);
            } else {
              var h = Di(n),
                p = h == Zi || "[object GeneratorFunction]" == h;
              if (On(n)) return ui(n, s);
              if ("[object Object]" == h || h == qi || (p && !o)) {
                if (((u = c || p ? {} : Fi(n)), !s))
                  return c
                    ? (function (t, n) {
                        return un(t, pi(t), n);
                      })(
                        n,
                        (function (t, n) {
                          return t && un(n, $n(n), t);
                        })(u, n)
                      )
                    : (function (t, n) {
                        return un(t, hi(t), n);
                      })(n, ei(u, n));
              } else {
                if (!$i[h]) return o ? n : {};
                u = zi(n, h, s);
              }
            }
            a || (a = new ni());
            var d = a.get(n);
            if (d) return d;
            a.set(n, u),
              Yi(n)
                ? n.forEach(function (i) {
                    u.add(t(i, e, r, i, n, a));
                  })
                : Ui(n) &&
                  n.forEach(function (i, o) {
                    u.set(o, t(i, e, r, o, n, a));
                  });
            var v = f ? void 0 : (l ? (c ? gi : vi) : c ? $n : Un)(n);
            return (
              Lt(v || n, function (i, o) {
                v && (i = n[(o = i)]), an(u, o, t(i, e, r, o, n, a));
              }),
              u
            );
          },
          Gi = function (t) {
            return Xi(t, 4);
          },
          Vi = function (t) {
            return Xi(t, 5);
          },
          Ki = function (t, n) {
            return Xi(t, 5, (n = "function" == typeof n ? n : void 0));
          },
          Ji = function (t, n) {
            return Xi(t, 4, (n = "function" == typeof n ? n : void 0));
          },
          Qi = function () {
            return new xt(this.value(), this.__chain__);
          },
          to = function (t) {
            for (
              var n = -1, e = null == t ? 0 : t.length, r = 0, i = [];
              ++n < e;

            ) {
              var o = t[n];
              o && (i[r++] = o);
            }
            return i;
          },
          no = function () {
            var t = arguments.length;
            if (!t) return [];
            for (var n = Array(t - 1), e = arguments[0], r = t; r--; )
              n[r - 1] = arguments[r];
            return Te(_(e) ? mt(e) : [e], Ne(n, 1));
          };
        function eo(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.__data__ = new he(); ++n < e; ) this.add(t[n]);
        }
        (eo.prototype.add = eo.prototype.push = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        }),
          (eo.prototype.has = function (t) {
            return this.__data__.has(t);
          });
        const ro = eo,
          io = function (t, n) {
            for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
              if (n(t[e], e, t)) return !0;
            return !1;
          },
          oo = function (t, n) {
            return t.has(n);
          },
          ao = function (t, n, e, r, i, o) {
            var a = 1 & e,
              u = t.length,
              s = n.length;
            if (u != s && !(a && s > u)) return !1;
            var c = o.get(t),
              l = o.get(n);
            if (c && l) return c == n && l == t;
            var f = -1,
              h = !0,
              p = 2 & e ? new ro() : void 0;
            for (o.set(t, n), o.set(n, t); ++f < u; ) {
              var d = t[f],
                v = n[f];
              if (r) var g = a ? r(v, d, f, n, t, o) : r(d, v, f, t, n, o);
              if (void 0 !== g) {
                if (g) continue;
                h = !1;
                break;
              }
              if (p) {
                if (
                  !io(n, function (t, n) {
                    if (!oo(p, n) && (d === t || i(d, t, e, r, o)))
                      return p.push(n);
                  })
                ) {
                  h = !1;
                  break;
                }
              } else if (d !== v && !i(d, v, e, r, o)) {
                h = !1;
                break;
              }
            }
            return o.delete(t), o.delete(n), h;
          },
          uo = function (t) {
            var n = -1,
              e = Array(t.size);
            return (
              t.forEach(function (t, r) {
                e[++n] = [r, t];
              }),
              e
            );
          },
          so = function (t) {
            var n = -1,
              e = Array(t.size);
            return (
              t.forEach(function (t) {
                e[++n] = t;
              }),
              e
            );
          };
        var co = a ? a.prototype : void 0,
          lo = co ? co.valueOf : void 0;
        var fo = Object.prototype.hasOwnProperty;
        var ho = "[object Arguments]",
          po = "[object Array]",
          vo = "[object Object]",
          go = Object.prototype.hasOwnProperty;
        const yo = function (t, n, e, r, i, o) {
            var a = _(t),
              u = _(n),
              s = a ? po : Di(t),
              c = u ? po : Di(n),
              l = (s = s == ho ? vo : s) == vo,
              f = (c = c == ho ? vo : c) == vo,
              h = s == c;
            if (h && On(t)) {
              if (!On(n)) return !1;
              (a = !0), (l = !1);
            }
            if (h && !l)
              return (
                o || (o = new ni()),
                a || Ln(t)
                  ? ao(t, n, e, r, i, o)
                  : (function (t, n, e, r, i, o, a) {
                      switch (e) {
                        case "[object DataView]":
                          if (
                            t.byteLength != n.byteLength ||
                            t.byteOffset != n.byteOffset
                          )
                            return !1;
                          (t = t.buffer), (n = n.buffer);
                        case "[object ArrayBuffer]":
                          return !(
                            t.byteLength != n.byteLength ||
                            !o(new ji(t), new ji(n))
                          );
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                          return rn(+t, +n);
                        case "[object Error]":
                          return t.name == n.name && t.message == n.message;
                        case "[object RegExp]":
                        case "[object String]":
                          return t == n + "";
                        case "[object Map]":
                          var u = uo;
                        case "[object Set]":
                          var s = 1 & r;
                          if ((u || (u = so), t.size != n.size && !s))
                            return !1;
                          var c = a.get(t);
                          if (c) return c == n;
                          (r |= 2), a.set(t, n);
                          var l = ao(u(t), u(n), r, i, o, a);
                          return a.delete(t), l;
                        case "[object Symbol]":
                          if (lo) return lo.call(t) == lo.call(n);
                      }
                      return !1;
                    })(t, n, s, e, r, i, o)
              );
            if (!(1 & e)) {
              var p = l && go.call(t, "__wrapped__"),
                d = f && go.call(n, "__wrapped__");
              if (p || d) {
                var v = p ? t.value() : t,
                  g = d ? n.value() : n;
                return o || (o = new ni()), i(v, g, e, r, o);
              }
            }
            return (
              !!h &&
              (o || (o = new ni()),
              (function (t, n, e, r, i, o) {
                var a = 1 & e,
                  u = vi(t),
                  s = u.length;
                if (s != vi(n).length && !a) return !1;
                for (var c = s; c--; ) {
                  var l = u[c];
                  if (!(a ? l in n : fo.call(n, l))) return !1;
                }
                var f = o.get(t),
                  h = o.get(n);
                if (f && h) return f == n && h == t;
                var p = !0;
                o.set(t, n), o.set(n, t);
                for (var d = a; ++c < s; ) {
                  var v = t[(l = u[c])],
                    g = n[l];
                  if (r) var y = a ? r(g, v, l, n, t, o) : r(v, g, l, t, n, o);
                  if (!(void 0 === y ? v === g || i(v, g, e, r, o) : y)) {
                    p = !1;
                    break;
                  }
                  d || (d = "constructor" == l);
                }
                if (p && !d) {
                  var _ = t.constructor,
                    x = n.constructor;
                  _ == x ||
                    !("constructor" in t) ||
                    !("constructor" in n) ||
                    ("function" == typeof _ &&
                      _ instanceof _ &&
                      "function" == typeof x &&
                      x instanceof x) ||
                    (p = !1);
                }
                return o.delete(t), o.delete(n), p;
              })(t, n, e, r, i, o))
            );
          },
          _o = function t(n, e, r, i, o) {
            return (
              n === e ||
              (null == n || null == e || (!d(n) && !d(e))
                ? n != n && e != e
                : yo(n, e, r, i, t, o))
            );
          },
          xo = function (t, n, e, r) {
            var i = e.length,
              o = i,
              a = !r;
            if (null == t) return !o;
            for (t = Object(t); i--; ) {
              var u = e[i];
              if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
            }
            for (; ++i < o; ) {
              var s = (u = e[i])[0],
                c = t[s],
                l = u[1];
              if (a && u[2]) {
                if (void 0 === c && !(s in t)) return !1;
              } else {
                var f = new ni();
                if (r) var h = r(c, l, s, t, n, f);
                if (!(void 0 === h ? _o(l, c, 3, r, f) : h)) return !1;
              }
            }
            return !0;
          },
          mo = function (t) {
            return t == t && !k(t);
          },
          bo = function (t) {
            for (var n = Un(t), e = n.length; e--; ) {
              var r = n[e],
                i = t[r];
              n[e] = [r, i, mo(i)];
            }
            return n;
          },
          wo = function (t, n) {
            return function (e) {
              return (
                null != e && e[t] === n && (void 0 !== n || t in Object(e))
              );
            };
          },
          Ao = function (t) {
            var n = bo(t);
            return 1 == n.length && n[0][2]
              ? wo(n[0][0], n[0][1])
              : function (e) {
                  return e === t || xo(e, t, n);
                };
          },
          So = function (t, n) {
            return null != t && n in Object(t);
          },
          Mo = function (t, n, e) {
            for (var r = -1, i = (n = be(n, t)).length, o = !1; ++r < i; ) {
              var a = we(n[r]);
              if (!(o = null != t && e(t, a))) break;
              t = t[a];
            }
            return o || ++r != i
              ? o
              : !!(i = null == t ? 0 : t.length) &&
                  fn(i) &&
                  qt(a, i) &&
                  (_(t) || wn(t));
          },
          To = function (t, n) {
            return null != t && Mo(t, n, So);
          },
          Oo = function (t, n) {
            return Qn(t) && mo(n)
              ? wo(we(t), n)
              : function (e) {
                  var r = Se(e, t);
                  return void 0 === r && r === n ? To(e, t) : _o(n, r, 3);
                };
          },
          ko = function (t) {
            return function (n) {
              return null == n ? void 0 : n[t];
            };
          },
          No = function (t) {
            return Qn(t)
              ? ko(we(t))
              : (function (t) {
                  return function (n) {
                    return Ae(n, t);
                  };
                })(t);
          },
          Eo = function (t) {
            return "function" == typeof t
              ? t
              : null == t
              ? R
              : "object" == typeof t
              ? _(t)
                ? Oo(t[0], t[1])
                : Ao(t)
              : No(t);
          },
          Do = function (t) {
            var n = null == t ? 0 : t.length,
              e = Eo;
            return (
              (t = n
                ? y(t, function (t) {
                    if ("function" != typeof t[1])
                      throw new TypeError("Expected a function");
                    return [e(t[0]), t[1]];
                  })
                : []),
              ln(function (e) {
                for (var r = -1; ++r < n; ) {
                  var i = t[r];
                  if (it(i[0], this, e)) return it(i[1], this, e);
                }
              })
            );
          },
          Io = function (t, n, e) {
            var r = e.length;
            if (null == t) return !r;
            for (t = Object(t); r--; ) {
              var i = e[r],
                o = n[i],
                a = t[i];
              if ((void 0 === a && !(i in t)) || !o(a)) return !1;
            }
            return !0;
          },
          jo = function (t) {
            return (function (t) {
              var n = Un(t);
              return function (e) {
                return Io(e, t, n);
              };
            })(Xi(t, 1));
          },
          Co = function (t, n) {
            return null == n || Io(t, n, Un(n));
          },
          Lo = function (t, n, e, r) {
            for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
              var a = t[i];
              n(r, a, e(a), t);
            }
            return r;
          },
          Bo = function (t) {
            return function (n, e, r) {
              for (var i = -1, o = Object(n), a = r(n), u = a.length; u--; ) {
                var s = a[t ? u : ++i];
                if (!1 === e(o[s], s, o)) break;
              }
              return n;
            };
          },
          Ro = Bo(),
          Po = function (t, n) {
            return t && Ro(t, n, Un);
          },
          zo = function (t, n) {
            return function (e, r) {
              if (null == e) return e;
              if (!hn(e)) return t(e, r);
              for (
                var i = e.length, o = n ? i : -1, a = Object(e);
                (n ? o-- : ++o < i) && !1 !== r(a[o], o, a);

              );
              return e;
            };
          },
          Fo = zo(Po),
          Wo = function (t, n, e, r) {
            return (
              Fo(t, function (t, i, o) {
                n(r, t, e(t), o);
              }),
              r
            );
          },
          Uo = function (t, n) {
            return function (e, r) {
              var i = _(e) ? Lo : Wo,
                o = n ? n() : {};
              return i(e, t, Eo(r), o);
            };
          };
        var Ho = Object.prototype.hasOwnProperty;
        const Yo = Uo(function (t, n, e) {
            Ho.call(t, e) ? ++t[e] : en(t, e, 1);
          }),
          qo = function (t, n) {
            var e = et(t);
            return null == n ? e : ei(e, n);
          };
        function Zo(t, n, e) {
          var r = tn(
            t,
            8,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0,
            (n = e ? void 0 : n)
          );
          return (r.placeholder = Zo.placeholder), r;
        }
        Zo.placeholder = {};
        const $o = Zo;
        function Xo(t, n, e) {
          var r = tn(
            t,
            16,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0,
            (n = e ? void 0 : n)
          );
          return (r.placeholder = Xo.placeholder), r;
        }
        Xo.placeholder = {};
        const Go = Xo,
          Vo = function () {
            return o.Date.now();
          };
        var Ko = Math.max,
          Jo = Math.min;
        const Qo = function (t, n, e) {
            var r,
              i,
              o,
              a,
              u,
              s,
              c = 0,
              l = !1,
              f = !1,
              h = !0;
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            function p(n) {
              var e = r,
                o = i;
              return (r = i = void 0), (c = n), (a = t.apply(o, e));
            }
            function d(t) {
              return (c = t), (u = setTimeout(g, n)), l ? p(t) : a;
            }
            function v(t) {
              var e = t - s;
              return void 0 === s || e >= n || e < 0 || (f && t - c >= o);
            }
            function g() {
              var t = Vo();
              if (v(t)) return y(t);
              u = setTimeout(
                g,
                (function (t) {
                  var e = n - (t - s);
                  return f ? Jo(e, o - (t - c)) : e;
                })(t)
              );
            }
            function y(t) {
              return (u = void 0), h && r ? p(t) : ((r = i = void 0), a);
            }
            function _() {
              var t = Vo(),
                e = v(t);
              if (((r = arguments), (i = this), (s = t), e)) {
                if (void 0 === u) return d(s);
                if (f) return clearTimeout(u), (u = setTimeout(g, n)), p(s);
              }
              return void 0 === u && (u = setTimeout(g, n)), a;
            }
            return (
              (n = j(n) || 0),
              k(e) &&
                ((l = !!e.leading),
                (o = (f = "maxWait" in e) ? Ko(j(e.maxWait) || 0, n) : o),
                (h = "trailing" in e ? !!e.trailing : h)),
              (_.cancel = function () {
                void 0 !== u && clearTimeout(u),
                  (c = 0),
                  (r = s = i = u = void 0);
              }),
              (_.flush = function () {
                return void 0 === u ? a : y(Vo());
              }),
              _
            );
          },
          ta = function (t, n) {
            return null == t || t != t ? n : t;
          };
        var na = Object.prototype,
          ea = na.hasOwnProperty;
        const ra = ln(function (t, n) {
            t = Object(t);
            var e = -1,
              r = n.length,
              i = r > 2 ? n[2] : void 0;
            for (i && pn(n[0], n[1], i) && (r = 1); ++e < r; )
              for (var o = n[e], a = $n(o), u = -1, s = a.length; ++u < s; ) {
                var c = a[u],
                  l = t[c];
                (void 0 === l || (rn(l, na[c]) && !ea.call(t, c))) &&
                  (t[c] = o[c]);
              }
            return t;
          }),
          ia = function (t, n, e) {
            ((void 0 !== e && !rn(t[n], e)) || (void 0 === e && !(n in t))) &&
              en(t, n, e);
          },
          oa = function (t) {
            return d(t) && hn(t);
          },
          aa = function (t, n) {
            if (
              ("constructor" !== n || "function" != typeof t[n]) &&
              "__proto__" != n
            )
              return t[n];
          },
          ua = function (t) {
            return un(t, $n(t));
          },
          sa = function t(n, e, r, i, o) {
            n !== e &&
              Ro(
                e,
                function (a, u) {
                  if ((o || (o = new ni()), k(a)))
                    !(function (t, n, e, r, i, o, a) {
                      var u = aa(t, e),
                        s = aa(n, e),
                        c = a.get(s);
                      if (c) ia(t, e, c);
                      else {
                        var l = o ? o(u, s, e + "", t, n, a) : void 0,
                          f = void 0 === l;
                        if (f) {
                          var h = _(s),
                            p = !h && On(s),
                            d = !h && !p && Ln(s);
                          (l = s),
                            h || p || d
                              ? _(u)
                                ? (l = u)
                                : oa(u)
                                ? (l = mt(u))
                                : p
                                ? ((f = !1), (l = ui(s, !0)))
                                : d
                                ? ((f = !1), (l = Pi(s, !0)))
                                : (l = [])
                              : ze(s) || wn(s)
                              ? ((l = u),
                                wn(u)
                                  ? (l = ua(u))
                                  : (k(u) && !P(u)) || (l = Fi(s)))
                              : (f = !1);
                        }
                        f && (a.set(s, l), i(l, s, r, o, a), a.delete(s)),
                          ia(t, e, l);
                      }
                    })(n, e, u, r, t, i, o);
                  else {
                    var s = i ? i(aa(n, u), a, u + "", n, e, o) : void 0;
                    void 0 === s && (s = a), ia(n, u, s);
                  }
                },
                $n
              );
          },
          ca = function t(n, e, r, i, o, a) {
            return (
              k(n) &&
                k(e) &&
                (a.set(e, n), sa(n, e, void 0, t, a), a.delete(e)),
              n
            );
          },
          la = dn(function (t, n, e, r) {
            sa(t, n, e, r);
          }),
          fa = ln(function (t) {
            return t.push(void 0, ca), it(la, void 0, t);
          }),
          ha = function (t, n, e) {
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return setTimeout(function () {
              t.apply(void 0, e);
            }, n);
          },
          pa = ln(function (t, n) {
            return ha(t, 1, n);
          }),
          da = ln(function (t, n, e) {
            return ha(t, j(n) || 0, e);
          }),
          va = function (t, n, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
              if (e(n, t[r])) return !0;
            return !1;
          },
          ga = function (t, n, e, r) {
            var i = -1,
              o = zt,
              a = !0,
              u = t.length,
              s = [],
              c = n.length;
            if (!u) return s;
            e && (n = y(n, Nn(e))),
              r
                ? ((o = va), (a = !1))
                : n.length >= 200 && ((o = oo), (a = !1), (n = new ro(n)));
            t: for (; ++i < u; ) {
              var l = t[i],
                f = null == e ? l : e(l);
              if (((l = r || 0 !== l ? l : 0), a && f == f)) {
                for (var h = c; h--; ) if (n[h] === f) continue t;
                s.push(l);
              } else o(n, f, r) || s.push(l);
            }
            return s;
          },
          ya = ln(function (t, n) {
            return oa(t) ? ga(t, Ne(n, 1, oa, !0)) : [];
          }),
          _a = function (t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : void 0;
          },
          xa = ln(function (t, n) {
            var e = _a(n);
            return (
              oa(e) && (e = void 0), oa(t) ? ga(t, Ne(n, 1, oa, !0), Eo(e)) : []
            );
          }),
          ma = ln(function (t, n) {
            var e = _a(n);
            return (
              oa(e) && (e = void 0),
              oa(t) ? ga(t, Ne(n, 1, oa, !0), void 0, e) : []
            );
          }),
          ba = w(function (t, n) {
            return t / n;
          }, 1),
          wa = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r
              ? ((n = e || void 0 === n ? 1 : L(n)), Xe(t, n < 0 ? 0 : n, r))
              : [];
          },
          Aa = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r
              ? ((n = e || void 0 === n ? 1 : L(n)),
                Xe(t, 0, (n = r - n) < 0 ? 0 : n))
              : [];
          },
          Sa = function (t, n, e, r) {
            for (
              var i = t.length, o = r ? i : -1;
              (r ? o-- : ++o < i) && n(t[o], o, t);

            );
            return e
              ? Xe(t, r ? 0 : o, r ? o + 1 : i)
              : Xe(t, r ? o + 1 : 0, r ? i : o);
          },
          Ma = function (t, n) {
            return t && t.length ? Sa(t, Eo(n), !0, !0) : [];
          },
          Ta = function (t, n) {
            return t && t.length ? Sa(t, Eo(n), !0) : [];
          },
          Oa = function (t) {
            return "function" == typeof t ? t : R;
          },
          ka = function (t, n) {
            return (_(t) ? Lt : Fo)(t, Oa(n));
          },
          Na = function (t, n) {
            for (
              var e = null == t ? 0 : t.length;
              e-- && !1 !== n(t[e], e, t);

            );
            return t;
          },
          Ea = Bo(!0),
          Da = function (t, n) {
            return t && Ea(t, n, Un);
          },
          Ia = zo(Da, !0),
          ja = function (t, n) {
            return (_(t) ? Na : Ia)(t, Oa(n));
          },
          Ca = function (t, n, e) {
            (t = me(t)), (n = b(n));
            var r = t.length,
              i = (e = void 0 === e ? r : Jr(L(e), 0, r));
            return (e -= n.length) >= 0 && t.slice(e, i) == n;
          },
          La = function (t) {
            return function (n) {
              var e = Di(n);
              return "[object Map]" == e
                ? uo(n)
                : "[object Set]" == e
                ? (function (t) {
                    var n = -1,
                      e = Array(t.size);
                    return (
                      t.forEach(function (t) {
                        e[++n] = [t, t];
                      }),
                      e
                    );
                  })(n)
                : (function (t, n) {
                    return y(n, function (n) {
                      return [n, t[n]];
                    });
                  })(n, t(n));
            };
          },
          Ba = La(Un),
          Ra = La($n),
          Pa = pr({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          });
        var za = /[&<>"']/g,
          Fa = RegExp(za.source);
        const Wa = function (t) {
          return (t = me(t)) && Fa.test(t) ? t.replace(za, Pa) : t;
        };
        var Ua = /[\\^$.*+?()[\]{}|]/g,
          Ha = RegExp(Ua.source);
        const Ya = function (t) {
            return (t = me(t)) && Ha.test(t) ? t.replace(Ua, "\\$&") : t;
          },
          qa = function (t, n) {
            for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
              if (!n(t[e], e, t)) return !1;
            return !0;
          },
          Za = function (t, n) {
            var e = !0;
            return (
              Fo(t, function (t, r, i) {
                return (e = !!n(t, r, i));
              }),
              e
            );
          },
          $a = function (t, n, e) {
            var r = _(t) ? qa : Za;
            return e && pn(t, n, e) && (n = void 0), r(t, Eo(n));
          },
          Xa = function (t) {
            return t ? Jr(L(t), 0, 4294967295) : 0;
          },
          Ga = function (t, n, e, r) {
            var i = null == t ? 0 : t.length;
            return i
              ? (e && "number" != typeof e && pn(t, n, e) && ((e = 0), (r = i)),
                (function (t, n, e, r) {
                  var i = t.length;
                  for (
                    (e = L(e)) < 0 && (e = -e > i ? 0 : i + e),
                      (r = void 0 === r || r > i ? i : L(r)) < 0 && (r += i),
                      r = e > r ? 0 : Xa(r);
                    e < r;

                  )
                    t[e++] = n;
                  return t;
                })(t, n, e, r))
              : [];
          },
          Va = function (t, n) {
            var e = [];
            return (
              Fo(t, function (t, r, i) {
                n(t, r, i) && e.push(t);
              }),
              e
            );
          },
          Ka = function (t, n) {
            return (_(t) ? si : Va)(t, Eo(n));
          },
          Ja = function (t) {
            return function (n, e, r) {
              var i = Object(n);
              if (!hn(n)) {
                var o = Eo(e);
                (n = Un(n)),
                  (e = function (t) {
                    return o(i[t], t, i);
                  });
              }
              var a = t(n, e, r);
              return a > -1 ? i[o ? n[a] : a] : void 0;
            };
          };
        var Qa = Math.max;
        const tu = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == e ? 0 : L(e);
            return i < 0 && (i = Qa(r + i, 0)), Bt(t, Eo(n), i);
          },
          nu = Ja(tu),
          eu = function (t, n, e) {
            var r;
            return (
              e(t, function (t, e, i) {
                if (n(t, e, i)) return (r = e), !1;
              }),
              r
            );
          },
          ru = function (t, n) {
            return eu(t, Eo(n), Po);
          };
        var iu = Math.max,
          ou = Math.min;
        const au = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = r - 1;
            return (
              void 0 !== e &&
                ((i = L(e)), (i = e < 0 ? iu(r + i, 0) : ou(i, r - 1))),
              Bt(t, Eo(n), i, !0)
            );
          },
          uu = Ja(au),
          su = function (t, n) {
            return eu(t, Eo(n), Da);
          },
          cu = function (t) {
            return t && t.length ? t[0] : void 0;
          },
          lu = function (t, n) {
            var e = -1,
              r = hn(t) ? Array(t.length) : [];
            return (
              Fo(t, function (t, i, o) {
                r[++e] = n(t, i, o);
              }),
              r
            );
          },
          fu = function (t, n) {
            return (_(t) ? y : lu)(t, Eo(n));
          },
          hu = function (t, n) {
            return Ne(fu(t, n), 1);
          },
          pu = function (t, n) {
            return Ne(fu(t, n), 1 / 0);
          },
          du = function (t, n, e) {
            return (e = void 0 === e ? 1 : L(e)), Ne(fu(t, n), e);
          },
          vu = function (t) {
            return null != t && t.length ? Ne(t, 1 / 0) : [];
          },
          gu = function (t, n) {
            return null != t && t.length
              ? ((n = void 0 === n ? 1 : L(n)), Ne(t, n))
              : [];
          },
          yu = function (t) {
            return tn(t, 512);
          },
          _u = Zr("floor"),
          xu = function (t) {
            return De(function (n) {
              var e = n.length,
                r = e,
                i = xt.prototype.thru;
              for (t && n.reverse(); r--; ) {
                var o = n[r];
                if ("function" != typeof o)
                  throw new TypeError("Expected a function");
                if (i && !a && "wrapper" == yt(o)) var a = new xt([], !0);
              }
              for (r = a ? r : e; ++r < e; ) {
                o = n[r];
                var u = yt(o),
                  s = "wrapper" == u ? dt(o) : void 0;
                a =
                  s && Mt(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9]
                    ? a[yt(s[0])].apply(a, s[3])
                    : 1 == o.length && Mt(o)
                    ? a[u]()
                    : a.thru(o);
              }
              return function () {
                var t = arguments,
                  r = t[0];
                if (a && 1 == t.length && _(r)) return a.plant(r).value();
                for (var i = 0, o = e ? n[i].apply(this, t) : r; ++i < e; )
                  o = n[i].call(this, o);
                return o;
              };
            });
          },
          mu = xu(),
          bu = xu(!0),
          wu = function (t, n) {
            return null == t ? t : Ro(t, Oa(n), $n);
          },
          Au = function (t, n) {
            return null == t ? t : Ea(t, Oa(n), $n);
          },
          Su = function (t, n) {
            return t && Po(t, Oa(n));
          },
          Mu = function (t, n) {
            return t && Da(t, Oa(n));
          },
          Tu = function (t) {
            for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e; ) {
              var i = t[n];
              r[i[0]] = i[1];
            }
            return r;
          },
          Ou = function (t, n) {
            return si(n, function (n) {
              return P(t[n]);
            });
          },
          ku = function (t) {
            return null == t ? [] : Ou(t, Un(t));
          },
          Nu = function (t) {
            return null == t ? [] : Ou(t, $n(t));
          };
        var Eu = Object.prototype.hasOwnProperty;
        const Du = Uo(function (t, n, e) {
            Eu.call(t, e) ? t[e].push(n) : en(t, e, [n]);
          }),
          Iu = function (t, n) {
            return t > n;
          },
          ju = function (t) {
            return function (n, e) {
              return (
                ("string" == typeof n && "string" == typeof e) ||
                  ((n = j(n)), (e = j(e))),
                t(n, e)
              );
            };
          },
          Cu = ju(Iu),
          Lu = ju(function (t, n) {
            return t >= n;
          });
        var Bu = Object.prototype.hasOwnProperty;
        const Ru = function (t, n) {
            return null != t && Bu.call(t, n);
          },
          Pu = function (t, n) {
            return null != t && Mo(t, n, Ru);
          };
        var zu = Math.max,
          Fu = Math.min;
        const Wu = function (t, n, e) {
            return (
              (n = C(n)),
              void 0 === e ? ((e = n), (n = 0)) : (e = C(e)),
              (function (t, n, e) {
                return t >= Fu(n, e) && t < zu(n, e);
              })((t = j(t)), n, e)
            );
          },
          Uu = function (t) {
            return (
              "string" == typeof t ||
              (!_(t) && d(t) && "[object String]" == p(t))
            );
          },
          Hu = function (t, n) {
            return y(n, function (n) {
              return t[n];
            });
          },
          Yu = function (t) {
            return null == t ? [] : Hu(t, Un(t));
          };
        var qu = Math.max;
        const Zu = function (t, n, e, r) {
          (t = hn(t) ? t : Yu(t)), (e = e && !r ? L(e) : 0);
          var i = t.length;
          return (
            e < 0 && (e = qu(i + e, 0)),
            Uu(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && Pt(t, n, e) > -1
          );
        };
        var $u = Math.max;
        const Xu = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == e ? 0 : L(e);
            return i < 0 && (i = $u(r + i, 0)), Pt(t, n, i);
          },
          Gu = function (t) {
            return null != t && t.length ? Xe(t, 0, -1) : [];
          };
        var Vu = Math.min;
        const Ku = function (t, n, e) {
            for (
              var r = e ? va : zt,
                i = t[0].length,
                o = t.length,
                a = o,
                u = Array(o),
                s = 1 / 0,
                c = [];
              a--;

            ) {
              var l = t[a];
              a && n && (l = y(l, Nn(n))),
                (s = Vu(l.length, s)),
                (u[a] =
                  !e && (n || (i >= 120 && l.length >= 120))
                    ? new ro(a && l)
                    : void 0);
            }
            l = t[0];
            var f = -1,
              h = u[0];
            t: for (; ++f < i && c.length < s; ) {
              var p = l[f],
                d = n ? n(p) : p;
              if (((p = e || 0 !== p ? p : 0), !(h ? oo(h, d) : r(c, d, e)))) {
                for (a = o; --a; ) {
                  var v = u[a];
                  if (!(v ? oo(v, d) : r(t[a], d, e))) continue t;
                }
                h && h.push(d), c.push(p);
              }
            }
            return c;
          },
          Ju = function (t) {
            return oa(t) ? t : [];
          },
          Qu = ln(function (t) {
            var n = y(t, Ju);
            return n.length && n[0] === t[0] ? Ku(n) : [];
          }),
          ts = ln(function (t) {
            var n = _a(t),
              e = y(t, Ju);
            return (
              n === _a(e) ? (n = void 0) : e.pop(),
              e.length && e[0] === t[0] ? Ku(e, Eo(n)) : []
            );
          }),
          ns = ln(function (t) {
            var n = _a(t),
              e = y(t, Ju);
            return (
              (n = "function" == typeof n ? n : void 0) && e.pop(),
              e.length && e[0] === t[0] ? Ku(e, void 0, n) : []
            );
          }),
          es = function (t, n) {
            return function (e, r) {
              return (function (t, n, e, r) {
                return (
                  Po(t, function (t, i, o) {
                    n(r, e(t), i, o);
                  }),
                  r
                );
              })(e, t, n(r), {});
            };
          };
        var rs = Object.prototype.toString;
        const is = es(function (t, n, e) {
          null != n && "function" != typeof n.toString && (n = rs.call(n)),
            (t[n] = e);
        }, It(R));
        var os = Object.prototype,
          as = os.hasOwnProperty,
          us = os.toString;
        const ss = es(function (t, n, e) {
            null != n && "function" != typeof n.toString && (n = us.call(n)),
              as.call(t, n) ? t[n].push(e) : (t[n] = [e]);
          }, Eo),
          cs = function (t, n) {
            return n.length < 2 ? t : Ae(t, Xe(n, 0, -1));
          },
          ls = function (t, n, e) {
            n = be(n, t);
            var r = null == (t = cs(t, n)) ? t : t[we(_a(n))];
            return null == r ? void 0 : it(r, t, e);
          },
          fs = ln(ls),
          hs = ln(function (t, n, e) {
            var r = -1,
              i = "function" == typeof n,
              o = hn(t) ? Array(t.length) : [];
            return (
              Fo(t, function (t) {
                o[++r] = i ? it(n, t, e) : ls(t, n, e);
              }),
              o
            );
          });
        var ps = jn && jn.isArrayBuffer;
        const ds = ps
            ? Nn(ps)
            : function (t) {
                return d(t) && "[object ArrayBuffer]" == p(t);
              },
          vs = function (t) {
            return !0 === t || !1 === t || (d(t) && "[object Boolean]" == p(t));
          };
        var gs = jn && jn.isDate;
        const ys = gs
            ? Nn(gs)
            : function (t) {
                return d(t) && "[object Date]" == p(t);
              },
          _s = function (t) {
            return d(t) && 1 === t.nodeType && !ze(t);
          };
        var xs = Object.prototype.hasOwnProperty;
        const ms = function (t) {
            if (null == t) return !0;
            if (
              hn(t) &&
              (_(t) ||
                "string" == typeof t ||
                "function" == typeof t.splice ||
                On(t) ||
                Ln(t) ||
                wn(t))
            )
              return !t.length;
            var n = Di(t);
            if ("[object Map]" == n || "[object Set]" == n) return !t.size;
            if (gn(t)) return !Wn(t).length;
            for (var e in t) if (xs.call(t, e)) return !1;
            return !0;
          },
          bs = function (t, n) {
            return _o(t, n);
          },
          ws = function (t, n, e) {
            var r = (e = "function" == typeof e ? e : void 0)
              ? e(t, n)
              : void 0;
            return void 0 === r ? _o(t, n, void 0, e) : !!r;
          };
        var As = o.isFinite;
        const Ss = function (t) {
            return "number" == typeof t && As(t);
          },
          Ms = function (t) {
            return "number" == typeof t && t == L(t);
          },
          Ts = function (t, n) {
            return t === n || xo(t, n, bo(n));
          },
          Os = function (t, n, e) {
            return (
              (e = "function" == typeof e ? e : void 0), xo(t, n, bo(n), e)
            );
          },
          ks = function (t) {
            return "number" == typeof t || (d(t) && "[object Number]" == p(t));
          },
          Ns = function (t) {
            return ks(t) && t != +t;
          },
          Es = z ? P : An,
          Ds = function (t) {
            if (Es(t))
              throw new Error(
                "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
              );
            return V(t);
          },
          Is = function (t) {
            return null == t;
          },
          js = function (t) {
            return null === t;
          };
        var Cs = jn && jn.isRegExp;
        const Ls = Cs
          ? Nn(Cs)
          : function (t) {
              return d(t) && "[object RegExp]" == p(t);
            };
        const Bs = function (t) {
            return Ms(t) && t >= -9007199254740991 && t <= 9007199254740991;
          },
          Rs = function (t) {
            return void 0 === t;
          },
          Ps = function (t) {
            return d(t) && "[object WeakMap]" == Di(t);
          },
          zs = function (t) {
            return d(t) && "[object WeakSet]" == p(t);
          },
          Fs = function (t) {
            return Eo("function" == typeof t ? t : Xi(t, 1));
          };
        var Ws = Array.prototype.join;
        const Us = function (t, n) {
            return null == t ? "" : Ws.call(t, n);
          },
          Hs = Wr(function (t, n, e) {
            return t + (e ? "-" : "") + n.toLowerCase();
          }),
          Ys = Uo(function (t, n, e) {
            en(t, e, n);
          });
        var qs = Math.max,
          Zs = Math.min;
        const $s = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = r;
            return (
              void 0 !== e &&
                (i = (i = L(e)) < 0 ? qs(r + i, 0) : Zs(i, r - 1)),
              n == n
                ? (function (t, n, e) {
                    for (var r = e + 1; r--; ) if (t[r] === n) return r;
                    return r;
                  })(t, n, i)
                : Bt(t, Rt, i, !0)
            );
          },
          Xs = Wr(function (t, n, e) {
            return t + (e ? " " : "") + n.toLowerCase();
          }),
          Gs = cr("toLowerCase"),
          Vs = function (t, n) {
            return t < n;
          },
          Ks = ju(Vs),
          Js = ju(function (t, n) {
            return t <= n;
          }),
          Qs = function (t, n) {
            var e = {};
            return (
              (n = Eo(n)),
              Po(t, function (t, r, i) {
                en(e, n(t, r, i), t);
              }),
              e
            );
          },
          tc = function (t, n) {
            var e = {};
            return (
              (n = Eo(n)),
              Po(t, function (t, r, i) {
                en(e, r, n(t, r, i));
              }),
              e
            );
          },
          nc = function (t) {
            return Ao(Xi(t, 1));
          },
          ec = function (t, n) {
            return Oo(t, Xi(n, 1));
          },
          rc = function (t, n, e) {
            for (var r = -1, i = t.length; ++r < i; ) {
              var o = t[r],
                a = n(o);
              if (null != a && (void 0 === u ? a == a && !v(a) : e(a, u)))
                var u = a,
                  s = o;
            }
            return s;
          },
          ic = function (t) {
            return t && t.length ? rc(t, R, Iu) : void 0;
          },
          oc = function (t, n) {
            return t && t.length ? rc(t, Eo(n), Iu) : void 0;
          },
          ac = function (t, n) {
            for (var e, r = -1, i = t.length; ++r < i; ) {
              var o = n(t[r]);
              void 0 !== o && (e = void 0 === e ? o : e + o);
            }
            return e;
          },
          uc = function (t, n) {
            var e = null == t ? 0 : t.length;
            return e ? ac(t, n) / e : NaN;
          },
          sc = function (t) {
            return uc(t, R);
          },
          cc = function (t, n) {
            return uc(t, Eo(n));
          },
          lc = dn(function (t, n, e) {
            sa(t, n, e);
          }),
          fc = ln(function (t, n) {
            return function (e) {
              return ls(e, t, n);
            };
          }),
          hc = ln(function (t, n) {
            return function (e) {
              return ls(t, e, n);
            };
          }),
          pc = function (t) {
            return t && t.length ? rc(t, R, Vs) : void 0;
          },
          dc = function (t, n) {
            return t && t.length ? rc(t, Eo(n), Vs) : void 0;
          },
          vc = function (t, n, e) {
            var r = Un(n),
              i = Ou(n, r),
              o = !(k(e) && "chain" in e && !e.chain),
              a = P(t);
            return (
              Lt(i, function (e) {
                var r = n[e];
                (t[e] = r),
                  a &&
                    (t.prototype[e] = function () {
                      var n = this.__chain__;
                      if (o || n) {
                        var e = t(this.__wrapped__),
                          i = (e.__actions__ = mt(this.__actions__));
                        return (
                          i.push({ func: r, args: arguments, thisArg: t }),
                          (e.__chain__ = n),
                          e
                        );
                      }
                      return r.apply(t, Te([this.value()], arguments));
                    });
              }),
              t
            );
          },
          gc = w(function (t, n) {
            return t * n;
          }, 1),
          yc = function (t) {
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, n[0]);
                case 2:
                  return !t.call(this, n[0], n[1]);
                case 3:
                  return !t.call(this, n[0], n[1], n[2]);
              }
              return !t.apply(this, n);
            };
          };
        var _c = a ? a.iterator : void 0;
        const xc = function (t) {
            if (!t) return [];
            if (hn(t)) return Uu(t) ? sr(t) : mt(t);
            if (_c && t[_c])
              return (function (t) {
                for (var n, e = []; !(n = t.next()).done; ) e.push(n.value);
                return e;
              })(t[_c]());
            var n = Di(t);
            return ("[object Map]" == n ? uo : "[object Set]" == n ? so : Yu)(
              t
            );
          },
          mc = function () {
            void 0 === this.__values__ && (this.__values__ = xc(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {
              done: t,
              value: t ? void 0 : this.__values__[this.__index__++],
            };
          },
          bc = function (t, n) {
            var e = t.length;
            if (e) return qt((n += n < 0 ? e : 0), e) ? t[n] : void 0;
          },
          wc = function (t, n) {
            return t && t.length ? bc(t, L(n)) : void 0;
          },
          Ac = function (t) {
            return (
              (t = L(t)),
              ln(function (n) {
                return bc(n, t);
              })
            );
          },
          Sc = function (t, n) {
            return (
              (n = be(n, t)), null == (t = cs(t, n)) || delete t[we(_a(n))]
            );
          },
          Mc = function (t) {
            return ze(t) ? void 0 : t;
          },
          Tc = De(function (t, n) {
            var e = {};
            if (null == t) return e;
            var r = !1;
            (n = y(n, function (n) {
              return (n = be(n, t)), r || (r = n.length > 1), n;
            })),
              un(t, gi(t), e),
              r && (e = Xi(e, 7, Mc));
            for (var i = n.length; i--; ) Sc(e, n[i]);
            return e;
          }),
          Oc = function (t, n, e, r) {
            if (!k(t)) return t;
            for (
              var i = -1, o = (n = be(n, t)).length, a = o - 1, u = t;
              null != u && ++i < o;

            ) {
              var s = we(n[i]),
                c = e;
              if ("__proto__" === s || "constructor" === s || "prototype" === s)
                return t;
              if (i != a) {
                var l = u[s];
                void 0 === (c = r ? r(l, s, u) : void 0) &&
                  (c = k(l) ? l : qt(n[i + 1]) ? [] : {});
              }
              an(u, s, c), (u = u[s]);
            }
            return t;
          },
          kc = function (t, n, e) {
            for (var r = -1, i = n.length, o = {}; ++r < i; ) {
              var a = n[r],
                u = Ae(t, a);
              e(u, a) && Oc(o, be(a, t), u);
            }
            return o;
          },
          Nc = function (t, n) {
            if (null == t) return {};
            var e = y(gi(t), function (t) {
              return [t];
            });
            return (
              (n = Eo(n)),
              kc(t, e, function (t, e) {
                return n(t, e[0]);
              })
            );
          },
          Ec = function (t, n) {
            return Nc(t, yc(Eo(n)));
          },
          Dc = function (t) {
            return Ue(2, t);
          },
          Ic = function (t, n) {
            if (t !== n) {
              var e = void 0 !== t,
                r = null === t,
                i = t == t,
                o = v(t),
                a = void 0 !== n,
                u = null === n,
                s = n == n,
                c = v(n);
              if (
                (!u && !c && !o && t > n) ||
                (o && a && s && !u && !c) ||
                (r && a && s) ||
                (!e && s) ||
                !i
              )
                return 1;
              if (
                (!r && !o && !c && t < n) ||
                (c && e && i && !r && !o) ||
                (u && e && i) ||
                (!a && i) ||
                !s
              )
                return -1;
            }
            return 0;
          },
          jc = function (t, n, e) {
            n = n.length
              ? y(n, function (t) {
                  return _(t)
                    ? function (n) {
                        return Ae(n, 1 === t.length ? t[0] : t);
                      }
                    : t;
                })
              : [R];
            var r = -1;
            return (
              (n = y(n, Nn(Eo))),
              (function (t, n) {
                var e = t.length;
                for (t.sort(n); e--; ) t[e] = t[e].value;
                return t;
              })(
                lu(t, function (t, e, i) {
                  return {
                    criteria: y(n, function (n) {
                      return n(t);
                    }),
                    index: ++r,
                    value: t,
                  };
                }),
                function (t, n) {
                  return (function (t, n, e) {
                    for (
                      var r = -1,
                        i = t.criteria,
                        o = n.criteria,
                        a = i.length,
                        u = e.length;
                      ++r < a;

                    ) {
                      var s = Ic(i[r], o[r]);
                      if (s) return r >= u ? s : s * ("desc" == e[r] ? -1 : 1);
                    }
                    return t.index - n.index;
                  })(t, n, e);
                }
              )
            );
          },
          Cc = function (t, n, e, r) {
            return null == t
              ? []
              : (_(n) || (n = null == n ? [] : [n]),
                _((e = r ? void 0 : e)) || (e = null == e ? [] : [e]),
                jc(t, n, e));
          },
          Lc = function (t) {
            return De(function (n) {
              return (
                (n = y(n, Nn(Eo))),
                ln(function (e) {
                  var r = this;
                  return t(n, function (t) {
                    return it(t, r, e);
                  });
                })
              );
            });
          },
          Bc = Lc(y),
          Rc = ln;
        var Pc = Math.min;
        const zc = Rc(function (t, n) {
            var e = (n =
              1 == n.length && _(n[0]) ? y(n[0], Nn(Eo)) : y(Ne(n, 1), Nn(Eo)))
              .length;
            return ln(function (r) {
              for (var i = -1, o = Pc(r.length, e); ++i < o; )
                r[i] = n[i].call(this, r[i]);
              return it(t, this, r);
            });
          }),
          Fc = Lc(qa),
          Wc = Lc(io);
        var Uc = Math.floor;
        const Hc = function (t, n) {
            var e = "";
            if (!t || n < 1 || n > 9007199254740991) return e;
            do {
              n % 2 && (e += t), (n = Uc(n / 2)) && (t += t);
            } while (n);
            return e;
          },
          Yc = ko("length");
        var qc = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
          Zc = "[^\\ud800-\\udfff]",
          $c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Xc = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Gc = "(?:" + qc + "|\\ud83c[\\udffb-\\udfff])?",
          Vc = "[\\ufe0e\\ufe0f]?",
          Kc =
            Vc +
            Gc +
            "(?:\\u200d(?:" +
            [Zc, $c, Xc].join("|") +
            ")" +
            Vc +
            Gc +
            ")*",
          Jc =
            "(?:" +
            [Zc + qc + "?", qc, $c, Xc, "[\\ud800-\\udfff]"].join("|") +
            ")",
          Qc = RegExp(
            "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Jc + Kc,
            "g"
          );
        const tl = function (t) {
          return Ke(t)
            ? (function (t) {
                for (var n = (Qc.lastIndex = 0); Qc.test(t); ) ++n;
                return n;
              })(t)
            : Yc(t);
        };
        var nl = Math.ceil;
        const el = function (t, n) {
          var e = (n = void 0 === n ? " " : b(n)).length;
          if (e < 2) return e ? Hc(n, t) : n;
          var r = Hc(n, nl(t / tl(n)));
          return Ke(n) ? Ge(sr(r), 0, t).join("") : r.slice(0, t);
        };
        var rl = Math.ceil,
          il = Math.floor;
        const ol = function (t, n, e) {
            t = me(t);
            var r = (n = L(n)) ? tl(t) : 0;
            if (!n || r >= n) return t;
            var i = (n - r) / 2;
            return el(il(i), e) + t + el(rl(i), e);
          },
          al = function (t, n, e) {
            t = me(t);
            var r = (n = L(n)) ? tl(t) : 0;
            return n && r < n ? t + el(n - r, e) : t;
          },
          ul = function (t, n, e) {
            t = me(t);
            var r = (n = L(n)) ? tl(t) : 0;
            return n && r < n ? el(n - r, e) + t : t;
          };
        var sl = /^\s+/,
          cl = o.parseInt;
        const ll = function (t, n, e) {
          return (
            e || null == n ? (n = 0) : n && (n = +n),
            cl(me(t).replace(sl, ""), n || 0)
          );
        };
        var fl = ln(function (t, n) {
          var e = Gt(n, Ht(fl));
          return tn(t, 32, void 0, n, e);
        });
        fl.placeholder = {};
        const hl = fl;
        var pl = ln(function (t, n) {
          var e = Gt(n, Ht(pl));
          return tn(t, 64, void 0, n, e);
        });
        pl.placeholder = {};
        const dl = pl,
          vl = Uo(
            function (t, n, e) {
              t[e ? 0 : 1].push(n);
            },
            function () {
              return [[], []];
            }
          ),
          gl = De(function (t, n) {
            return null == t
              ? {}
              : (function (t, n) {
                  return kc(t, n, function (n, e) {
                    return To(t, e);
                  });
                })(t, n);
          }),
          yl = function (t) {
            for (var n, e = this; e instanceof lt; ) {
              var r = bt(e);
              (r.__index__ = 0),
                (r.__values__ = void 0),
                n ? (i.__wrapped__ = r) : (n = r);
              var i = r;
              e = e.__wrapped__;
            }
            return (i.__wrapped__ = t), n;
          },
          _l = function (t) {
            return function (n) {
              return null == t ? void 0 : Ae(t, n);
            };
          },
          xl = function (t, n, e, r) {
            for (var i = e - 1, o = t.length; ++i < o; )
              if (r(t[i], n)) return i;
            return -1;
          };
        var ml = Array.prototype.splice;
        const bl = function (t, n, e, r) {
            var i = r ? xl : Pt,
              o = -1,
              a = n.length,
              u = t;
            for (t === n && (n = mt(n)), e && (u = y(t, Nn(e))); ++o < a; )
              for (
                var s = 0, c = n[o], l = e ? e(c) : c;
                (s = i(u, l, s, r)) > -1;

              )
                u !== t && ml.call(u, s, 1), ml.call(t, s, 1);
            return t;
          },
          wl = function (t, n) {
            return t && t.length && n && n.length ? bl(t, n) : t;
          },
          Al = ln(wl),
          Sl = function (t, n, e) {
            return t && t.length && n && n.length ? bl(t, n, Eo(e)) : t;
          },
          Ml = function (t, n, e) {
            return t && t.length && n && n.length ? bl(t, n, void 0, e) : t;
          };
        var Tl = Array.prototype.splice;
        const Ol = function (t, n) {
            for (var e = t ? n.length : 0, r = e - 1; e--; ) {
              var i = n[e];
              if (e == r || i !== o) {
                var o = i;
                qt(i) ? Tl.call(t, i, 1) : Sc(t, i);
              }
            }
            return t;
          },
          kl = De(function (t, n) {
            var e = null == t ? 0 : t.length,
              r = Me(t, n);
            return (
              Ol(
                t,
                y(n, function (t) {
                  return qt(t, e) ? +t : t;
                }).sort(Ic)
              ),
              r
            );
          });
        var Nl = Math.floor,
          El = Math.random;
        const Dl = function (t, n) {
          return t + Nl(El() * (n - t + 1));
        };
        var Il = parseFloat,
          jl = Math.min,
          Cl = Math.random;
        const Ll = function (t, n, e) {
          if (
            (e && "boolean" != typeof e && pn(t, n, e) && (n = e = void 0),
            void 0 === e &&
              ("boolean" == typeof n
                ? ((e = n), (n = void 0))
                : "boolean" == typeof t && ((e = t), (t = void 0))),
            void 0 === t && void 0 === n
              ? ((t = 0), (n = 1))
              : ((t = C(t)), void 0 === n ? ((n = t), (t = 0)) : (n = C(n))),
            t > n)
          ) {
            var r = t;
            (t = n), (n = r);
          }
          if (e || t % 1 || n % 1) {
            var i = Cl();
            return jl(t + i * (n - t + Il("1e-" + ((i + "").length - 1))), n);
          }
          return Dl(t, n);
        };
        var Bl = Math.ceil,
          Rl = Math.max;
        const Pl = function (t) {
            return function (n, e, r) {
              return (
                r && "number" != typeof r && pn(n, e, r) && (e = r = void 0),
                (n = C(n)),
                void 0 === e ? ((e = n), (n = 0)) : (e = C(e)),
                (function (t, n, e, r) {
                  for (
                    var i = -1, o = Rl(Bl((n - t) / (e || 1)), 0), a = Array(o);
                    o--;

                  )
                    (a[r ? o : ++i] = t), (t += e);
                  return a;
                })(n, e, (r = void 0 === r ? (n < e ? 1 : -1) : C(r)), t)
              );
            };
          },
          zl = Pl(),
          Fl = Pl(!0),
          Wl = De(function (t, n) {
            return tn(t, 256, void 0, void 0, void 0, n);
          }),
          Ul = function (t, n, e, r, i) {
            return (
              i(t, function (t, i, o) {
                e = r ? ((r = !1), t) : n(e, t, i, o);
              }),
              e
            );
          },
          Hl = function (t, n, e) {
            var r = _(t) ? hr : Ul,
              i = arguments.length < 3;
            return r(t, Eo(n), e, i, Fo);
          },
          Yl = function (t, n, e, r) {
            var i = null == t ? 0 : t.length;
            for (r && i && (e = t[--i]); i--; ) e = n(e, t[i], i, t);
            return e;
          },
          ql = function (t, n, e) {
            var r = _(t) ? Yl : Ul,
              i = arguments.length < 3;
            return r(t, Eo(n), e, i, Ia);
          },
          Zl = function (t, n) {
            return (_(t) ? si : Va)(t, yc(Eo(n)));
          },
          $l = function (t, n) {
            var e = [];
            if (!t || !t.length) return e;
            var r = -1,
              i = [],
              o = t.length;
            for (n = Eo(n); ++r < o; ) {
              var a = t[r];
              n(a, r, t) && (e.push(a), i.push(r));
            }
            return Ol(t, i), e;
          },
          Xl = function (t, n, e) {
            return (
              (n = (e ? pn(t, n, e) : void 0 === n) ? 1 : L(n)), Hc(me(t), n)
            );
          },
          Gl = function () {
            var t = arguments,
              n = me(t[0]);
            return t.length < 3 ? n : n.replace(t[1], t[2]);
          },
          Vl = function (t, n) {
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return (n = void 0 === n ? n : L(n)), ln(t, n);
          },
          Kl = function (t, n, e) {
            var r = -1,
              i = (n = be(n, t)).length;
            for (i || ((i = 1), (t = void 0)); ++r < i; ) {
              var o = null == t ? void 0 : t[we(n[r])];
              void 0 === o && ((r = i), (o = e)), (t = P(o) ? o.call(t) : o);
            }
            return t;
          };
        var Jl = Array.prototype.reverse;
        const Ql = function (t) {
            return null == t ? t : Jl.call(t);
          },
          tf = Zr("round"),
          nf = function (t) {
            var n = t.length;
            return n ? t[Dl(0, n - 1)] : void 0;
          },
          ef = function (t) {
            return nf(Yu(t));
          },
          rf = function (t) {
            return (_(t) ? nf : ef)(t);
          },
          of = function (t, n) {
            var e = -1,
              r = t.length,
              i = r - 1;
            for (n = void 0 === n ? r : n; ++e < n; ) {
              var o = Dl(e, i),
                a = t[o];
              (t[o] = t[e]), (t[e] = a);
            }
            return (t.length = n), t;
          },
          af = function (t, n) {
            return of(mt(t), Jr(n, 0, t.length));
          },
          uf = function (t, n) {
            var e = Yu(t);
            return of(e, Jr(n, 0, e.length));
          },
          sf = function (t, n, e) {
            return (
              (n = (e ? pn(t, n, e) : void 0 === n) ? 1 : L(n)),
              (_(t) ? af : uf)(t, n)
            );
          },
          cf = function (t, n, e) {
            return null == t ? t : Oc(t, n, e);
          },
          lf = function (t, n, e, r) {
            return (
              (r = "function" == typeof r ? r : void 0),
              null == t ? t : Oc(t, n, e, r)
            );
          },
          ff = function (t) {
            return of(mt(t));
          },
          hf = function (t) {
            return of(Yu(t));
          },
          pf = function (t) {
            return (_(t) ? ff : hf)(t);
          },
          df = function (t) {
            if (null == t) return 0;
            if (hn(t)) return Uu(t) ? tl(t) : t.length;
            var n = Di(t);
            return "[object Map]" == n || "[object Set]" == n
              ? t.size
              : Wn(t).length;
          },
          vf = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r
              ? (e && "number" != typeof e && pn(t, n, e)
                  ? ((n = 0), (e = r))
                  : ((n = null == n ? 0 : L(n)), (e = void 0 === e ? r : L(e))),
                Xe(t, n, e))
              : [];
          },
          gf = Wr(function (t, n, e) {
            return t + (e ? "_" : "") + n.toLowerCase();
          }),
          yf = function (t, n) {
            var e;
            return (
              Fo(t, function (t, r, i) {
                return !(e = n(t, r, i));
              }),
              !!e
            );
          },
          _f = function (t, n, e) {
            var r = _(t) ? io : yf;
            return e && pn(t, n, e) && (n = void 0), r(t, Eo(n));
          },
          xf = ln(function (t, n) {
            if (null == t) return [];
            var e = n.length;
            return (
              e > 1 && pn(t, n[0], n[1])
                ? (n = [])
                : e > 2 && pn(n[0], n[1], n[2]) && (n = [n[0]]),
              jc(t, Ne(n, 1), [])
            );
          });
        var mf = Math.floor,
          bf = Math.min;
        const wf = function (t, n, e, r) {
            var i = 0,
              o = null == t ? 0 : t.length;
            if (0 === o) return 0;
            for (
              var a = (n = e(n)) != n,
                u = null === n,
                s = v(n),
                c = void 0 === n;
              i < o;

            ) {
              var l = mf((i + o) / 2),
                f = e(t[l]),
                h = void 0 !== f,
                p = null === f,
                d = f == f,
                g = v(f);
              if (a) var y = r || d;
              else
                y = c
                  ? d && (r || h)
                  : u
                  ? d && h && (r || !p)
                  : s
                  ? d && h && !p && (r || !g)
                  : !p && !g && (r ? f <= n : f < n);
              y ? (i = l + 1) : (o = l);
            }
            return bf(o, 4294967294);
          },
          Af = function (t, n, e) {
            var r = 0,
              i = null == t ? r : t.length;
            if ("number" == typeof n && n == n && i <= 2147483647) {
              for (; r < i; ) {
                var o = (r + i) >>> 1,
                  a = t[o];
                null !== a && !v(a) && (e ? a <= n : a < n)
                  ? (r = o + 1)
                  : (i = o);
              }
              return i;
            }
            return wf(t, n, R, e);
          },
          Sf = function (t, n) {
            return Af(t, n);
          },
          Mf = function (t, n, e) {
            return wf(t, n, Eo(e));
          },
          Tf = function (t, n) {
            var e = null == t ? 0 : t.length;
            if (e) {
              var r = Af(t, n);
              if (r < e && rn(t[r], n)) return r;
            }
            return -1;
          },
          Of = function (t, n) {
            return Af(t, n, !0);
          },
          kf = function (t, n, e) {
            return wf(t, n, Eo(e), !0);
          },
          Nf = function (t, n) {
            if (null != t && t.length) {
              var e = Af(t, n, !0) - 1;
              if (rn(t[e], n)) return e;
            }
            return -1;
          },
          Ef = function (t, n) {
            for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
              var a = t[e],
                u = n ? n(a) : a;
              if (!e || !rn(u, s)) {
                var s = u;
                o[i++] = 0 === a ? 0 : a;
              }
            }
            return o;
          },
          Df = function (t) {
            return t && t.length ? Ef(t) : [];
          },
          If = function (t, n) {
            return t && t.length ? Ef(t, Eo(n)) : [];
          },
          jf = function (t, n, e) {
            return (
              e && "number" != typeof e && pn(t, n, e) && (n = e = void 0),
              (e = void 0 === e ? 4294967295 : e >>> 0)
                ? (t = me(t)) &&
                  ("string" == typeof n || (null != n && !Ls(n))) &&
                  !(n = b(n)) &&
                  Ke(t)
                  ? Ge(sr(t), 0, e)
                  : t.split(n, e)
                : []
            );
          };
        var Cf = Math.max;
        const Lf = function (t, n) {
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return (
              (n = null == n ? 0 : Cf(L(n), 0)),
              ln(function (e) {
                var r = e[n],
                  i = Ge(e, 0, n);
                return r && Te(i, r), it(t, this, i);
              })
            );
          },
          Bf = Wr(function (t, n, e) {
            return t + (e ? " " : "") + lr(n);
          }),
          Rf = function (t, n, e) {
            return (
              (t = me(t)),
              (e = null == e ? 0 : Jr(L(e), 0, t.length)),
              (n = b(n)),
              t.slice(e, e + n.length) == n
            );
          },
          Pf = function () {
            return {};
          },
          zf = function () {
            return "";
          },
          Ff = function () {
            return !0;
          },
          Wf = w(function (t, n) {
            return t - n;
          }, 0),
          Uf = function (t) {
            return t && t.length ? ac(t, R) : 0;
          },
          Hf = function (t, n) {
            return t && t.length ? ac(t, Eo(n)) : 0;
          },
          Yf = function (t) {
            var n = null == t ? 0 : t.length;
            return n ? Xe(t, 1, n) : [];
          },
          qf = function (t, n, e) {
            return t && t.length
              ? ((n = e || void 0 === n ? 1 : L(n)), Xe(t, 0, n < 0 ? 0 : n))
              : [];
          },
          Zf = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r
              ? ((n = e || void 0 === n ? 1 : L(n)),
                Xe(t, (n = r - n) < 0 ? 0 : n, r))
              : [];
          },
          $f = function (t, n) {
            return t && t.length ? Sa(t, Eo(n), !1, !0) : [];
          },
          Xf = function (t, n) {
            return t && t.length ? Sa(t, Eo(n)) : [];
          },
          Gf = function (t, n) {
            return n(t), t;
          };
        var Vf = Object.prototype,
          Kf = Vf.hasOwnProperty;
        const Jf = function (t, n, e, r) {
          return void 0 === t || (rn(t, Vf[e]) && !Kf.call(r, e)) ? n : t;
        };
        var Qf = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        };
        const th = function (t) {
            return "\\" + Qf[t];
          },
          nh = /<%=([\s\S]+?)%>/g,
          eh = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: nh,
            variable: "",
            imports: { _: { escape: Wa } },
          };
        var rh = /\b__p \+= '';/g,
          ih = /\b(__p \+=) '' \+/g,
          oh = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          ah = /[()=,{}\[\]\/\s]/,
          uh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          sh = /($^)/,
          ch = /['\n\r\u2028\u2029\\]/g,
          lh = Object.prototype.hasOwnProperty;
        const fh = function (t, n, e) {
            var r = eh.imports._.templateSettings || eh;
            e && pn(t, n, e) && (n = void 0),
              (t = me(t)),
              (n = Gn({}, n, r, Jf));
            var i,
              o,
              a = Gn({}, n.imports, r.imports, Jf),
              u = Un(a),
              s = Hu(a, u),
              c = 0,
              l = n.interpolate || sh,
              f = "__p += '",
              h = RegExp(
                (n.escape || sh).source +
                  "|" +
                  l.source +
                  "|" +
                  (l === nh ? uh : sh).source +
                  "|" +
                  (n.evaluate || sh).source +
                  "|$",
                "g"
              ),
              p = lh.call(n, "sourceURL")
                ? "//# sourceURL=" +
                  (n.sourceURL + "").replace(/\s/g, " ") +
                  "\n"
                : "";
            t.replace(h, function (n, e, r, a, u, s) {
              return (
                r || (r = a),
                (f += t.slice(c, s).replace(ch, th)),
                e && ((i = !0), (f += "' +\n__e(" + e + ") +\n'")),
                u && ((o = !0), (f += "';\n" + u + ";\n__p += '")),
                r &&
                  (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                (c = s + n.length),
                n
              );
            }),
              (f += "';\n");
            var d = lh.call(n, "variable") && n.variable;
            if (d) {
              if (ah.test(d))
                throw new Error(
                  "Invalid `variable` option passed into `_.template`"
                );
            } else f = "with (obj) {\n" + f + "\n}\n";
            (f = (o ? f.replace(rh, "") : f)
              .replace(ih, "$1")
              .replace(oh, "$1;")),
              (f =
                "function(" +
                (d || "obj") +
                ") {\n" +
                (d ? "" : "obj || (obj = {});\n") +
                "var __t, __p = ''" +
                (i ? ", __e = _.escape" : "") +
                (o
                  ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                  : ";\n") +
                f +
                "return __p\n}");
            var v = We(function () {
              return Function(u, p + "return " + f).apply(void 0, s);
            });
            if (((v.source = f), Fe(v))) throw v;
            return v;
          },
          hh = function (t, n, e) {
            var r = !0,
              i = !0;
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return (
              k(e) &&
                ((r = "leading" in e ? !!e.leading : r),
                (i = "trailing" in e ? !!e.trailing : i)),
              Qo(t, n, { leading: r, maxWait: n, trailing: i })
            );
          },
          ph = function (t, n) {
            return n(t);
          };
        var dh = 4294967295,
          vh = Math.min;
        const gh = function (t, n) {
            if ((t = L(t)) < 1 || t > 9007199254740991) return [];
            var e = dh,
              r = vh(t, dh);
            (n = Oa(n)), (t -= dh);
            for (var i = yn(r, n); ++e < t; ) n(e);
            return i;
          },
          yh = function () {
            return this;
          },
          _h = function (t, n) {
            var e = t;
            return (
              e instanceof ht && (e = e.value()),
              hr(
                n,
                function (t, n) {
                  return n.func.apply(n.thisArg, Te([t], n.args));
                },
                e
              )
            );
          },
          xh = function () {
            return _h(this.__wrapped__, this.__actions__);
          },
          mh = function (t) {
            return me(t).toLowerCase();
          },
          bh = function (t) {
            return _(t) ? y(t, we) : v(t) ? [t] : mt(ye(me(t)));
          };
        const wh = function (t) {
            return t
              ? Jr(L(t), -9007199254740991, 9007199254740991)
              : 0 === t
              ? t
              : 0;
          },
          Ah = function (t) {
            return me(t).toUpperCase();
          },
          Sh = function (t, n, e) {
            var r = _(t),
              i = r || On(t) || Ln(t);
            if (((n = Eo(n)), null == e)) {
              var o = t && t.constructor;
              e = i ? (r ? new o() : []) : k(t) && P(o) ? et(je(t)) : {};
            }
            return (
              (i ? Lt : Po)(t, function (t, r, i) {
                return n(e, t, r, i);
              }),
              e
            );
          },
          Mh = function (t, n) {
            for (var e = t.length; e-- && Pt(n, t[e], 0) > -1; );
            return e;
          },
          Th = function (t, n) {
            for (var e = -1, r = t.length; ++e < r && Pt(n, t[e], 0) > -1; );
            return e;
          },
          Oh = function (t, n, e) {
            if ((t = me(t)) && (e || void 0 === n)) return O(t);
            if (!t || !(n = b(n))) return t;
            var r = sr(t),
              i = sr(n),
              o = Th(r, i),
              a = Mh(r, i) + 1;
            return Ge(r, o, a).join("");
          },
          kh = function (t, n, e) {
            if ((t = me(t)) && (e || void 0 === n)) return t.slice(0, M(t) + 1);
            if (!t || !(n = b(n))) return t;
            var r = sr(t),
              i = Mh(r, sr(n)) + 1;
            return Ge(r, 0, i).join("");
          };
        var Nh = /^\s+/;
        const Eh = function (t, n, e) {
          if ((t = me(t)) && (e || void 0 === n)) return t.replace(Nh, "");
          if (!t || !(n = b(n))) return t;
          var r = sr(t),
            i = Th(r, sr(n));
          return Ge(r, i).join("");
        };
        var Dh = /\w*$/;
        const Ih = function (t, n) {
            var e = 30,
              r = "...";
            if (k(n)) {
              var i = "separator" in n ? n.separator : i;
              (e = "length" in n ? L(n.length) : e),
                (r = "omission" in n ? b(n.omission) : r);
            }
            var o = (t = me(t)).length;
            if (Ke(t)) {
              var a = sr(t);
              o = a.length;
            }
            if (e >= o) return t;
            var u = e - tl(r);
            if (u < 1) return r;
            var s = a ? Ge(a, 0, u).join("") : t.slice(0, u);
            if (void 0 === i) return s + r;
            if ((a && (u += s.length - u), Ls(i))) {
              if (t.slice(u).search(i)) {
                var c,
                  l = s;
                for (
                  i.global || (i = RegExp(i.source, me(Dh.exec(i)) + "g")),
                    i.lastIndex = 0;
                  (c = i.exec(l));

                )
                  var f = c.index;
                s = s.slice(0, void 0 === f ? u : f);
              }
            } else if (t.indexOf(b(i), u) != u) {
              var h = s.lastIndexOf(i);
              h > -1 && (s = s.slice(0, h));
            }
            return s + r;
          },
          jh = function (t) {
            return nn(t, 1);
          },
          Ch = pr({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          });
        var Lh = /&(?:amp|lt|gt|quot|#39);/g,
          Bh = RegExp(Lh.source);
        const Rh = function (t) {
            return (t = me(t)) && Bh.test(t) ? t.replace(Lh, Ch) : t;
          },
          Ph =
            xi && 1 / so(new xi([, -0]))[1] == 1 / 0
              ? function (t) {
                  return new xi(t);
                }
              : pt,
          zh = function (t, n, e) {
            var r = -1,
              i = zt,
              o = t.length,
              a = !0,
              u = [],
              s = u;
            if (e) (a = !1), (i = va);
            else if (o >= 200) {
              var c = n ? null : Ph(t);
              if (c) return so(c);
              (a = !1), (i = oo), (s = new ro());
            } else s = n ? [] : u;
            t: for (; ++r < o; ) {
              var l = t[r],
                f = n ? n(l) : l;
              if (((l = e || 0 !== l ? l : 0), a && f == f)) {
                for (var h = s.length; h--; ) if (s[h] === f) continue t;
                n && s.push(f), u.push(l);
              } else i(s, f, e) || (s !== u && s.push(f), u.push(l));
            }
            return u;
          },
          Fh = ln(function (t) {
            return zh(Ne(t, 1, oa, !0));
          }),
          Wh = ln(function (t) {
            var n = _a(t);
            return oa(n) && (n = void 0), zh(Ne(t, 1, oa, !0), Eo(n));
          }),
          Uh = ln(function (t) {
            var n = _a(t);
            return (
              (n = "function" == typeof n ? n : void 0),
              zh(Ne(t, 1, oa, !0), void 0, n)
            );
          }),
          Hh = function (t) {
            return t && t.length ? zh(t) : [];
          },
          Yh = function (t, n) {
            return t && t.length ? zh(t, Eo(n)) : [];
          },
          qh = function (t, n) {
            return (
              (n = "function" == typeof n ? n : void 0),
              t && t.length ? zh(t, void 0, n) : []
            );
          };
        var Zh = 0;
        const $h = function (t) {
            var n = ++Zh;
            return me(t) + n;
          },
          Xh = function (t, n) {
            return null == t || Sc(t, n);
          };
        var Gh = Math.max;
        const Vh = function (t) {
            if (!t || !t.length) return [];
            var n = 0;
            return (
              (t = si(t, function (t) {
                if (oa(t)) return (n = Gh(t.length, n)), !0;
              })),
              yn(n, function (n) {
                return y(t, ko(n));
              })
            );
          },
          Kh = function (t, n) {
            if (!t || !t.length) return [];
            var e = Vh(t);
            return null == n
              ? e
              : y(e, function (t) {
                  return it(n, void 0, t);
                });
          },
          Jh = function (t, n, e, r) {
            return Oc(t, n, e(Ae(t, n)), r);
          },
          Qh = function (t, n, e) {
            return null == t ? t : Jh(t, n, Oa(e));
          },
          tp = function (t, n, e, r) {
            return (
              (r = "function" == typeof r ? r : void 0),
              null == t ? t : Jh(t, n, Oa(e), r)
            );
          },
          np = Wr(function (t, n, e) {
            return t + (e ? " " : "") + n.toUpperCase();
          }),
          ep = function (t) {
            return null == t ? [] : Hu(t, $n(t));
          },
          rp = ln(function (t, n) {
            return oa(t) ? ga(t, n) : [];
          }),
          ip = function (t, n) {
            return hl(Oa(n), t);
          },
          op = De(function (t) {
            var n = t.length,
              e = n ? t[0] : 0,
              r = this.__wrapped__,
              i = function (n) {
                return Me(n, t);
              };
            return !(n > 1 || this.__actions__.length) &&
              r instanceof ht &&
              qt(e)
              ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                  func: ph,
                  args: [i],
                  thisArg: void 0,
                }),
                new xt(r, this.__chain__).thru(function (t) {
                  return n && !t.length && t.push(void 0), t;
                }))
              : this.thru(i);
          }),
          ap = function () {
            return Xr(this);
          },
          up = function () {
            var t = this.__wrapped__;
            if (t instanceof ht) {
              var n = t;
              return (
                this.__actions__.length && (n = new ht(this)),
                (n = n.reverse()).__actions__.push({
                  func: ph,
                  args: [Ql],
                  thisArg: void 0,
                }),
                new xt(n, this.__chain__)
              );
            }
            return this.thru(Ql);
          },
          sp = function (t, n, e) {
            var r = t.length;
            if (r < 2) return r ? zh(t[0]) : [];
            for (var i = -1, o = Array(r); ++i < r; )
              for (var a = t[i], u = -1; ++u < r; )
                u != i && (o[i] = ga(o[i] || a, t[u], n, e));
            return zh(Ne(o, 1), n, e);
          },
          cp = ln(function (t) {
            return sp(si(t, oa));
          }),
          lp = ln(function (t) {
            var n = _a(t);
            return oa(n) && (n = void 0), sp(si(t, oa), Eo(n));
          }),
          fp = ln(function (t) {
            var n = _a(t);
            return (
              (n = "function" == typeof n ? n : void 0),
              sp(si(t, oa), void 0, n)
            );
          }),
          hp = ln(Vh),
          pp = function (t, n, e) {
            for (var r = -1, i = t.length, o = n.length, a = {}; ++r < i; ) {
              var u = r < o ? n[r] : void 0;
              e(a, t[r], u);
            }
            return a;
          },
          dp = function (t, n) {
            return pp(t || [], n || [], an);
          },
          vp = function (t, n) {
            return pp(t || [], n || [], Oc);
          },
          gp = ln(function (t) {
            var n = t.length,
              e = n > 1 ? t[n - 1] : void 0;
            return (
              (e = "function" == typeof e ? (t.pop(), e) : void 0), Kh(t, e)
            );
          }),
          yp = {
            chunk: Kr,
            compact: to,
            concat: no,
            difference: ya,
            differenceBy: xa,
            differenceWith: ma,
            drop: wa,
            dropRight: Aa,
            dropRightWhile: Ma,
            dropWhile: Ta,
            fill: Ga,
            findIndex: tu,
            findLastIndex: au,
            first: cu,
            flatten: Ee,
            flattenDeep: vu,
            flattenDepth: gu,
            fromPairs: Tu,
            head: cu,
            indexOf: Xu,
            initial: Gu,
            intersection: Qu,
            intersectionBy: ts,
            intersectionWith: ns,
            join: Us,
            last: _a,
            lastIndexOf: $s,
            nth: wc,
            pull: Al,
            pullAll: wl,
            pullAllBy: Sl,
            pullAllWith: Ml,
            pullAt: kl,
            remove: $l,
            reverse: Ql,
            slice: vf,
            sortedIndex: Sf,
            sortedIndexBy: Mf,
            sortedIndexOf: Tf,
            sortedLastIndex: Of,
            sortedLastIndexBy: kf,
            sortedLastIndexOf: Nf,
            sortedUniq: Df,
            sortedUniqBy: If,
            tail: Yf,
            take: qf,
            takeRight: Zf,
            takeRightWhile: $f,
            takeWhile: Xf,
            union: Fh,
            unionBy: Wh,
            unionWith: Uh,
            uniq: Hh,
            uniqBy: Yh,
            uniqWith: qh,
            unzip: Vh,
            unzipWith: Kh,
            without: rp,
            xor: cp,
            xorBy: lp,
            xorWith: fp,
            zip: hp,
            zipObject: dp,
            zipObjectDeep: vp,
            zipWith: gp,
          },
          _p = {
            countBy: Yo,
            each: ka,
            eachRight: ja,
            every: $a,
            filter: Ka,
            find: nu,
            findLast: uu,
            flatMap: hu,
            flatMapDeep: pu,
            flatMapDepth: du,
            forEach: ka,
            forEachRight: ja,
            groupBy: Du,
            includes: Zu,
            invokeMap: hs,
            keyBy: Ys,
            map: fu,
            orderBy: Cc,
            partition: vl,
            reduce: Hl,
            reduceRight: ql,
            reject: Zl,
            sample: rf,
            sampleSize: sf,
            shuffle: pf,
            size: df,
            some: _f,
            sortBy: xf,
          },
          xp = { now: Vo },
          mp = {
            after: B,
            ary: nn,
            before: Ue,
            bind: Ye,
            bindKey: $e,
            curry: $o,
            curryRight: Go,
            debounce: Qo,
            defer: pa,
            delay: da,
            flip: yu,
            memoize: de,
            negate: yc,
            once: Dc,
            overArgs: zc,
            partial: hl,
            partialRight: dl,
            rearg: Wl,
            rest: Vl,
            spread: Lf,
            throttle: hh,
            unary: jh,
            wrap: ip,
          },
          bp = {
            castArray: Hr,
            clone: Gi,
            cloneDeep: Vi,
            cloneDeepWith: Ki,
            cloneWith: Ji,
            conformsTo: Co,
            eq: rn,
            gt: Cu,
            gte: Lu,
            isArguments: wn,
            isArray: _,
            isArrayBuffer: ds,
            isArrayLike: hn,
            isArrayLikeObject: oa,
            isBoolean: vs,
            isBuffer: On,
            isDate: ys,
            isElement: _s,
            isEmpty: ms,
            isEqual: bs,
            isEqualWith: ws,
            isError: Fe,
            isFinite: Ss,
            isFunction: P,
            isInteger: Ms,
            isLength: fn,
            isMap: Ui,
            isMatch: Ts,
            isMatchWith: Os,
            isNaN: Ns,
            isNative: Ds,
            isNil: Is,
            isNull: js,
            isNumber: ks,
            isObject: k,
            isObjectLike: d,
            isPlainObject: ze,
            isRegExp: Ls,
            isSafeInteger: Bs,
            isSet: Yi,
            isString: Uu,
            isSymbol: v,
            isTypedArray: Ln,
            isUndefined: Rs,
            isWeakMap: Ps,
            isWeakSet: zs,
            lt: Ks,
            lte: Js,
            toArray: xc,
            toFinite: C,
            toInteger: L,
            toLength: Xa,
            toNumber: j,
            toPlainObject: ua,
            toSafeInteger: wh,
            toString: me,
          },
          wp = {
            add: A,
            ceil: $r,
            divide: ba,
            floor: _u,
            max: ic,
            maxBy: oc,
            mean: sc,
            meanBy: cc,
            min: pc,
            minBy: dc,
            multiply: gc,
            round: tf,
            subtract: Wf,
            sum: Uf,
            sumBy: Hf,
          },
          Ap = { clamp: Qr, inRange: Wu, random: Ll },
          Sp = {
            assign: Yn,
            assignIn: Xn,
            assignInWith: Gn,
            assignWith: Vn,
            at: Ie,
            create: qo,
            defaults: ra,
            defaultsDeep: fa,
            entries: Ba,
            entriesIn: Ra,
            extend: Xn,
            extendWith: Gn,
            findKey: ru,
            findLastKey: su,
            forIn: wu,
            forInRight: Au,
            forOwn: Su,
            forOwnRight: Mu,
            functions: ku,
            functionsIn: Nu,
            get: Se,
            has: Pu,
            hasIn: To,
            invert: is,
            invertBy: ss,
            invoke: fs,
            keys: Un,
            keysIn: $n,
            mapKeys: Qs,
            mapValues: tc,
            merge: lc,
            mergeWith: la,
            omit: Tc,
            omitBy: Ec,
            pick: gl,
            pickBy: Nc,
            result: Kl,
            set: cf,
            setWith: lf,
            toPairs: Ba,
            toPairsIn: Ra,
            transform: Sh,
            unset: Xh,
            update: Qh,
            updateWith: tp,
            values: Yu,
            valuesIn: ep,
          },
          Mp = {
            at: op,
            chain: Xr,
            commit: Qi,
            lodash: St,
            next: mc,
            plant: yl,
            reverse: up,
            tap: Gf,
            thru: ph,
            toIterator: yh,
            toJSON: xh,
            value: xh,
            valueOf: xh,
            wrapperChain: ap,
          },
          Tp = {
            camelCase: Ur,
            capitalize: fr,
            deburr: yr,
            endsWith: Ca,
            escape: Wa,
            escapeRegExp: Ya,
            kebabCase: Hs,
            lowerCase: Xs,
            lowerFirst: Gs,
            pad: ol,
            padEnd: al,
            padStart: ul,
            parseInt: ll,
            repeat: Xl,
            replace: Gl,
            snakeCase: gf,
            split: jf,
            startCase: Bf,
            startsWith: Rf,
            template: fh,
            templateSettings: eh,
            toLower: mh,
            toUpper: Ah,
            trim: Oh,
            trimEnd: kh,
            trimStart: Eh,
            truncate: Ih,
            unescape: Rh,
            upperCase: np,
            upperFirst: lr,
            words: zr,
          },
          Op = {
            attempt: We,
            bindAll: qe,
            cond: Do,
            conforms: jo,
            constant: It,
            defaultTo: ta,
            flow: mu,
            flowRight: bu,
            identity: R,
            iteratee: Fs,
            matches: nc,
            matchesProperty: ec,
            method: fc,
            methodOf: hc,
            mixin: vc,
            noop: pt,
            nthArg: Ac,
            over: Bc,
            overEvery: Fc,
            overSome: Wc,
            property: No,
            propertyOf: _l,
            range: zl,
            rangeRight: Fl,
            stubArray: ci,
            stubFalse: An,
            stubObject: Pf,
            stubString: zf,
            stubTrue: Ff,
            times: gh,
            toPath: bh,
            uniqueId: $h,
          };
        var kp = Math.max,
          Np = Math.min;
        var Ep = Math.min;
        var Dp,
          Ip,
          jp = 4294967295,
          Cp = Array.prototype,
          Lp = Object.prototype.hasOwnProperty,
          Bp = a ? a.iterator : void 0,
          Rp = Math.max,
          Pp = Math.min,
          zp =
            ((Dp = vc),
            function (t, n, e) {
              if (null == e) {
                var r = k(n),
                  i = r && Un(n),
                  o = i && i.length && Ou(n, i);
                (o ? o.length : r) || ((e = n), (n = t), (t = this));
              }
              return Dp(t, n, e);
            });
        (St.after = mp.after),
          (St.ary = mp.ary),
          (St.assign = Sp.assign),
          (St.assignIn = Sp.assignIn),
          (St.assignInWith = Sp.assignInWith),
          (St.assignWith = Sp.assignWith),
          (St.at = Sp.at),
          (St.before = mp.before),
          (St.bind = mp.bind),
          (St.bindAll = Op.bindAll),
          (St.bindKey = mp.bindKey),
          (St.castArray = bp.castArray),
          (St.chain = Mp.chain),
          (St.chunk = yp.chunk),
          (St.compact = yp.compact),
          (St.concat = yp.concat),
          (St.cond = Op.cond),
          (St.conforms = Op.conforms),
          (St.constant = Op.constant),
          (St.countBy = _p.countBy),
          (St.create = Sp.create),
          (St.curry = mp.curry),
          (St.curryRight = mp.curryRight),
          (St.debounce = mp.debounce),
          (St.defaults = Sp.defaults),
          (St.defaultsDeep = Sp.defaultsDeep),
          (St.defer = mp.defer),
          (St.delay = mp.delay),
          (St.difference = yp.difference),
          (St.differenceBy = yp.differenceBy),
          (St.differenceWith = yp.differenceWith),
          (St.drop = yp.drop),
          (St.dropRight = yp.dropRight),
          (St.dropRightWhile = yp.dropRightWhile),
          (St.dropWhile = yp.dropWhile),
          (St.fill = yp.fill),
          (St.filter = _p.filter),
          (St.flatMap = _p.flatMap),
          (St.flatMapDeep = _p.flatMapDeep),
          (St.flatMapDepth = _p.flatMapDepth),
          (St.flatten = yp.flatten),
          (St.flattenDeep = yp.flattenDeep),
          (St.flattenDepth = yp.flattenDepth),
          (St.flip = mp.flip),
          (St.flow = Op.flow),
          (St.flowRight = Op.flowRight),
          (St.fromPairs = yp.fromPairs),
          (St.functions = Sp.functions),
          (St.functionsIn = Sp.functionsIn),
          (St.groupBy = _p.groupBy),
          (St.initial = yp.initial),
          (St.intersection = yp.intersection),
          (St.intersectionBy = yp.intersectionBy),
          (St.intersectionWith = yp.intersectionWith),
          (St.invert = Sp.invert),
          (St.invertBy = Sp.invertBy),
          (St.invokeMap = _p.invokeMap),
          (St.iteratee = Op.iteratee),
          (St.keyBy = _p.keyBy),
          (St.keys = Un),
          (St.keysIn = Sp.keysIn),
          (St.map = _p.map),
          (St.mapKeys = Sp.mapKeys),
          (St.mapValues = Sp.mapValues),
          (St.matches = Op.matches),
          (St.matchesProperty = Op.matchesProperty),
          (St.memoize = mp.memoize),
          (St.merge = Sp.merge),
          (St.mergeWith = Sp.mergeWith),
          (St.method = Op.method),
          (St.methodOf = Op.methodOf),
          (St.mixin = zp),
          (St.negate = yc),
          (St.nthArg = Op.nthArg),
          (St.omit = Sp.omit),
          (St.omitBy = Sp.omitBy),
          (St.once = mp.once),
          (St.orderBy = _p.orderBy),
          (St.over = Op.over),
          (St.overArgs = mp.overArgs),
          (St.overEvery = Op.overEvery),
          (St.overSome = Op.overSome),
          (St.partial = mp.partial),
          (St.partialRight = mp.partialRight),
          (St.partition = _p.partition),
          (St.pick = Sp.pick),
          (St.pickBy = Sp.pickBy),
          (St.property = Op.property),
          (St.propertyOf = Op.propertyOf),
          (St.pull = yp.pull),
          (St.pullAll = yp.pullAll),
          (St.pullAllBy = yp.pullAllBy),
          (St.pullAllWith = yp.pullAllWith),
          (St.pullAt = yp.pullAt),
          (St.range = Op.range),
          (St.rangeRight = Op.rangeRight),
          (St.rearg = mp.rearg),
          (St.reject = _p.reject),
          (St.remove = yp.remove),
          (St.rest = mp.rest),
          (St.reverse = yp.reverse),
          (St.sampleSize = _p.sampleSize),
          (St.set = Sp.set),
          (St.setWith = Sp.setWith),
          (St.shuffle = _p.shuffle),
          (St.slice = yp.slice),
          (St.sortBy = _p.sortBy),
          (St.sortedUniq = yp.sortedUniq),
          (St.sortedUniqBy = yp.sortedUniqBy),
          (St.split = Tp.split),
          (St.spread = mp.spread),
          (St.tail = yp.tail),
          (St.take = yp.take),
          (St.takeRight = yp.takeRight),
          (St.takeRightWhile = yp.takeRightWhile),
          (St.takeWhile = yp.takeWhile),
          (St.tap = Mp.tap),
          (St.throttle = mp.throttle),
          (St.thru = ph),
          (St.toArray = bp.toArray),
          (St.toPairs = Sp.toPairs),
          (St.toPairsIn = Sp.toPairsIn),
          (St.toPath = Op.toPath),
          (St.toPlainObject = bp.toPlainObject),
          (St.transform = Sp.transform),
          (St.unary = mp.unary),
          (St.union = yp.union),
          (St.unionBy = yp.unionBy),
          (St.unionWith = yp.unionWith),
          (St.uniq = yp.uniq),
          (St.uniqBy = yp.uniqBy),
          (St.uniqWith = yp.uniqWith),
          (St.unset = Sp.unset),
          (St.unzip = yp.unzip),
          (St.unzipWith = yp.unzipWith),
          (St.update = Sp.update),
          (St.updateWith = Sp.updateWith),
          (St.values = Sp.values),
          (St.valuesIn = Sp.valuesIn),
          (St.without = yp.without),
          (St.words = Tp.words),
          (St.wrap = mp.wrap),
          (St.xor = yp.xor),
          (St.xorBy = yp.xorBy),
          (St.xorWith = yp.xorWith),
          (St.zip = yp.zip),
          (St.zipObject = yp.zipObject),
          (St.zipObjectDeep = yp.zipObjectDeep),
          (St.zipWith = yp.zipWith),
          (St.entries = Sp.toPairs),
          (St.entriesIn = Sp.toPairsIn),
          (St.extend = Sp.assignIn),
          (St.extendWith = Sp.assignInWith),
          zp(St, St),
          (St.add = wp.add),
          (St.attempt = Op.attempt),
          (St.camelCase = Tp.camelCase),
          (St.capitalize = Tp.capitalize),
          (St.ceil = wp.ceil),
          (St.clamp = Ap.clamp),
          (St.clone = bp.clone),
          (St.cloneDeep = bp.cloneDeep),
          (St.cloneDeepWith = bp.cloneDeepWith),
          (St.cloneWith = bp.cloneWith),
          (St.conformsTo = bp.conformsTo),
          (St.deburr = Tp.deburr),
          (St.defaultTo = Op.defaultTo),
          (St.divide = wp.divide),
          (St.endsWith = Tp.endsWith),
          (St.eq = bp.eq),
          (St.escape = Tp.escape),
          (St.escapeRegExp = Tp.escapeRegExp),
          (St.every = _p.every),
          (St.find = _p.find),
          (St.findIndex = yp.findIndex),
          (St.findKey = Sp.findKey),
          (St.findLast = _p.findLast),
          (St.findLastIndex = yp.findLastIndex),
          (St.findLastKey = Sp.findLastKey),
          (St.floor = wp.floor),
          (St.forEach = _p.forEach),
          (St.forEachRight = _p.forEachRight),
          (St.forIn = Sp.forIn),
          (St.forInRight = Sp.forInRight),
          (St.forOwn = Sp.forOwn),
          (St.forOwnRight = Sp.forOwnRight),
          (St.get = Sp.get),
          (St.gt = bp.gt),
          (St.gte = bp.gte),
          (St.has = Sp.has),
          (St.hasIn = Sp.hasIn),
          (St.head = yp.head),
          (St.identity = R),
          (St.includes = _p.includes),
          (St.indexOf = yp.indexOf),
          (St.inRange = Ap.inRange),
          (St.invoke = Sp.invoke),
          (St.isArguments = bp.isArguments),
          (St.isArray = _),
          (St.isArrayBuffer = bp.isArrayBuffer),
          (St.isArrayLike = bp.isArrayLike),
          (St.isArrayLikeObject = bp.isArrayLikeObject),
          (St.isBoolean = bp.isBoolean),
          (St.isBuffer = bp.isBuffer),
          (St.isDate = bp.isDate),
          (St.isElement = bp.isElement),
          (St.isEmpty = bp.isEmpty),
          (St.isEqual = bp.isEqual),
          (St.isEqualWith = bp.isEqualWith),
          (St.isError = bp.isError),
          (St.isFinite = bp.isFinite),
          (St.isFunction = bp.isFunction),
          (St.isInteger = bp.isInteger),
          (St.isLength = bp.isLength),
          (St.isMap = bp.isMap),
          (St.isMatch = bp.isMatch),
          (St.isMatchWith = bp.isMatchWith),
          (St.isNaN = bp.isNaN),
          (St.isNative = bp.isNative),
          (St.isNil = bp.isNil),
          (St.isNull = bp.isNull),
          (St.isNumber = bp.isNumber),
          (St.isObject = k),
          (St.isObjectLike = bp.isObjectLike),
          (St.isPlainObject = bp.isPlainObject),
          (St.isRegExp = bp.isRegExp),
          (St.isSafeInteger = bp.isSafeInteger),
          (St.isSet = bp.isSet),
          (St.isString = bp.isString),
          (St.isSymbol = bp.isSymbol),
          (St.isTypedArray = bp.isTypedArray),
          (St.isUndefined = bp.isUndefined),
          (St.isWeakMap = bp.isWeakMap),
          (St.isWeakSet = bp.isWeakSet),
          (St.join = yp.join),
          (St.kebabCase = Tp.kebabCase),
          (St.last = _a),
          (St.lastIndexOf = yp.lastIndexOf),
          (St.lowerCase = Tp.lowerCase),
          (St.lowerFirst = Tp.lowerFirst),
          (St.lt = bp.lt),
          (St.lte = bp.lte),
          (St.max = wp.max),
          (St.maxBy = wp.maxBy),
          (St.mean = wp.mean),
          (St.meanBy = wp.meanBy),
          (St.min = wp.min),
          (St.minBy = wp.minBy),
          (St.stubArray = Op.stubArray),
          (St.stubFalse = Op.stubFalse),
          (St.stubObject = Op.stubObject),
          (St.stubString = Op.stubString),
          (St.stubTrue = Op.stubTrue),
          (St.multiply = wp.multiply),
          (St.nth = yp.nth),
          (St.noop = Op.noop),
          (St.now = xp.now),
          (St.pad = Tp.pad),
          (St.padEnd = Tp.padEnd),
          (St.padStart = Tp.padStart),
          (St.parseInt = Tp.parseInt),
          (St.random = Ap.random),
          (St.reduce = _p.reduce),
          (St.reduceRight = _p.reduceRight),
          (St.repeat = Tp.repeat),
          (St.replace = Tp.replace),
          (St.result = Sp.result),
          (St.round = wp.round),
          (St.sample = _p.sample),
          (St.size = _p.size),
          (St.snakeCase = Tp.snakeCase),
          (St.some = _p.some),
          (St.sortedIndex = yp.sortedIndex),
          (St.sortedIndexBy = yp.sortedIndexBy),
          (St.sortedIndexOf = yp.sortedIndexOf),
          (St.sortedLastIndex = yp.sortedLastIndex),
          (St.sortedLastIndexBy = yp.sortedLastIndexBy),
          (St.sortedLastIndexOf = yp.sortedLastIndexOf),
          (St.startCase = Tp.startCase),
          (St.startsWith = Tp.startsWith),
          (St.subtract = wp.subtract),
          (St.sum = wp.sum),
          (St.sumBy = wp.sumBy),
          (St.template = Tp.template),
          (St.times = Op.times),
          (St.toFinite = bp.toFinite),
          (St.toInteger = L),
          (St.toLength = bp.toLength),
          (St.toLower = Tp.toLower),
          (St.toNumber = bp.toNumber),
          (St.toSafeInteger = bp.toSafeInteger),
          (St.toString = bp.toString),
          (St.toUpper = Tp.toUpper),
          (St.trim = Tp.trim),
          (St.trimEnd = Tp.trimEnd),
          (St.trimStart = Tp.trimStart),
          (St.truncate = Tp.truncate),
          (St.unescape = Tp.unescape),
          (St.uniqueId = Op.uniqueId),
          (St.upperCase = Tp.upperCase),
          (St.upperFirst = Tp.upperFirst),
          (St.each = _p.forEach),
          (St.eachRight = _p.forEachRight),
          (St.first = yp.head),
          zp(
            St,
            ((Ip = {}),
            Po(St, function (t, n) {
              Lp.call(St.prototype, n) || (Ip[n] = t);
            }),
            Ip),
            { chain: !1 }
          ),
          (St.VERSION = "4.17.21"),
          ((St.templateSettings = Tp.templateSettings).imports._ = St),
          Lt(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (t) {
              St[t].placeholder = St;
            }
          ),
          Lt(["drop", "take"], function (t, n) {
            (ht.prototype[t] = function (e) {
              e = void 0 === e ? 1 : Rp(L(e), 0);
              var r = this.__filtered__ && !n ? new ht(this) : this.clone();
              return (
                r.__filtered__
                  ? (r.__takeCount__ = Pp(e, r.__takeCount__))
                  : r.__views__.push({
                      size: Pp(e, jp),
                      type: t + (r.__dir__ < 0 ? "Right" : ""),
                    }),
                r
              );
            }),
              (ht.prototype[t + "Right"] = function (n) {
                return this.reverse()[t](n).reverse();
              });
          }),
          Lt(["filter", "map", "takeWhile"], function (t, n) {
            var e = n + 1,
              r = 1 == e || 3 == e;
            ht.prototype[t] = function (t) {
              var n = this.clone();
              return (
                n.__iteratees__.push({ iteratee: Eo(t), type: e }),
                (n.__filtered__ = n.__filtered__ || r),
                n
              );
            };
          }),
          Lt(["head", "last"], function (t, n) {
            var e = "take" + (n ? "Right" : "");
            ht.prototype[t] = function () {
              return this[e](1).value()[0];
            };
          }),
          Lt(["initial", "tail"], function (t, n) {
            var e = "drop" + (n ? "" : "Right");
            ht.prototype[t] = function () {
              return this.__filtered__ ? new ht(this) : this[e](1);
            };
          }),
          (ht.prototype.compact = function () {
            return this.filter(R);
          }),
          (ht.prototype.find = function (t) {
            return this.filter(t).head();
          }),
          (ht.prototype.findLast = function (t) {
            return this.reverse().find(t);
          }),
          (ht.prototype.invokeMap = ln(function (t, n) {
            return "function" == typeof t
              ? new ht(this)
              : this.map(function (e) {
                  return ls(e, t, n);
                });
          })),
          (ht.prototype.reject = function (t) {
            return this.filter(yc(Eo(t)));
          }),
          (ht.prototype.slice = function (t, n) {
            t = L(t);
            var e = this;
            return e.__filtered__ && (t > 0 || n < 0)
              ? new ht(e)
              : (t < 0 ? (e = e.takeRight(-t)) : t && (e = e.drop(t)),
                void 0 !== n &&
                  (e = (n = L(n)) < 0 ? e.dropRight(-n) : e.take(n - t)),
                e);
          }),
          (ht.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse();
          }),
          (ht.prototype.toArray = function () {
            return this.take(jp);
          }),
          Po(ht.prototype, function (t, n) {
            var e = /^(?:filter|find|map|reject)|While$/.test(n),
              r = /^(?:head|last)$/.test(n),
              i = St[r ? "take" + ("last" == n ? "Right" : "") : n],
              o = r || /^find/.test(n);
            i &&
              (St.prototype[n] = function () {
                var n = this.__wrapped__,
                  a = r ? [1] : arguments,
                  u = n instanceof ht,
                  s = a[0],
                  c = u || _(n),
                  l = function (t) {
                    var n = i.apply(St, Te([t], a));
                    return r && f ? n[0] : n;
                  };
                c &&
                  e &&
                  "function" == typeof s &&
                  1 != s.length &&
                  (u = c = !1);
                var f = this.__chain__,
                  h = !!this.__actions__.length,
                  p = o && !f,
                  d = u && !h;
                if (!o && c) {
                  n = d ? n : new ht(this);
                  var v = t.apply(n, a);
                  return (
                    v.__actions__.push({
                      func: ph,
                      args: [l],
                      thisArg: void 0,
                    }),
                    new xt(v, f)
                  );
                }
                return p && d
                  ? t.apply(this, a)
                  : ((v = this.thru(l)),
                    p ? (r ? v.value()[0] : v.value()) : v);
              });
          }),
          Lt(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (t) {
              var n = Cp[t],
                e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                r = /^(?:pop|shift)$/.test(t);
              St.prototype[t] = function () {
                var t = arguments;
                if (r && !this.__chain__) {
                  var i = this.value();
                  return n.apply(_(i) ? i : [], t);
                }
                return this[e](function (e) {
                  return n.apply(_(e) ? e : [], t);
                });
              };
            }
          ),
          Po(ht.prototype, function (t, n) {
            var e = St[n];
            if (e) {
              var r = e.name + "";
              Lp.call(vt, r) || (vt[r] = []), vt[r].push({ name: n, func: e });
            }
          }),
          (vt[Vt(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
          (ht.prototype.clone = function () {
            var t = new ht(this.__wrapped__);
            return (
              (t.__actions__ = mt(this.__actions__)),
              (t.__dir__ = this.__dir__),
              (t.__filtered__ = this.__filtered__),
              (t.__iteratees__ = mt(this.__iteratees__)),
              (t.__takeCount__ = this.__takeCount__),
              (t.__views__ = mt(this.__views__)),
              t
            );
          }),
          (ht.prototype.reverse = function () {
            if (this.__filtered__) {
              var t = new ht(this);
              (t.__dir__ = -1), (t.__filtered__ = !0);
            } else (t = this.clone()).__dir__ *= -1;
            return t;
          }),
          (ht.prototype.value = function () {
            var t = this.__wrapped__.value(),
              n = this.__dir__,
              e = _(t),
              r = n < 0,
              i = e ? t.length : 0,
              o = (function (t, n, e) {
                for (var r = -1, i = e.length; ++r < i; ) {
                  var o = e[r],
                    a = o.size;
                  switch (o.type) {
                    case "drop":
                      t += a;
                      break;
                    case "dropRight":
                      n -= a;
                      break;
                    case "take":
                      n = Np(n, t + a);
                      break;
                    case "takeRight":
                      t = kp(t, n - a);
                  }
                }
                return { start: t, end: n };
              })(0, i, this.__views__),
              a = o.start,
              u = o.end,
              s = u - a,
              c = r ? u : a - 1,
              l = this.__iteratees__,
              f = l.length,
              h = 0,
              p = Ep(s, this.__takeCount__);
            if (!e || (!r && i == s && p == s)) return _h(t, this.__actions__);
            var d = [];
            t: for (; s-- && h < p; ) {
              for (var v = -1, g = t[(c += n)]; ++v < f; ) {
                var y = l[v],
                  x = y.iteratee,
                  m = y.type,
                  b = x(g);
                if (2 == m) g = b;
                else if (!b) {
                  if (1 == m) continue t;
                  break t;
                }
              }
              d[h++] = g;
            }
            return d;
          }),
          (St.prototype.at = Mp.at),
          (St.prototype.chain = Mp.wrapperChain),
          (St.prototype.commit = Mp.commit),
          (St.prototype.next = Mp.next),
          (St.prototype.plant = Mp.plant),
          (St.prototype.reverse = Mp.reverse),
          (St.prototype.toJSON = St.prototype.valueOf = St.prototype.value =
            Mp.value),
          (St.prototype.first = St.prototype.head),
          Bp && (St.prototype[Bp] = Mp.toIterator);
        const Fp = St;
      },
      379: (t, n, e) => {
        "use strict";
        var r,
          i = (function () {
            var t = {};
            return function (n) {
              if (void 0 === t[n]) {
                var e = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  e instanceof window.HTMLIFrameElement
                )
                  try {
                    e = e.contentDocument.head;
                  } catch (t) {
                    e = null;
                  }
                t[n] = e;
              }
              return t[n];
            };
          })(),
          o = [];
        function a(t) {
          for (var n = -1, e = 0; e < o.length; e++)
            if (o[e].identifier === t) {
              n = e;
              break;
            }
          return n;
        }
        function u(t, n) {
          for (var e = {}, r = [], i = 0; i < t.length; i++) {
            var u = t[i],
              s = n.base ? u[0] + n.base : u[0],
              c = e[s] || 0,
              l = "".concat(s, " ").concat(c);
            e[s] = c + 1;
            var f = a(l),
              h = { css: u[1], media: u[2], sourceMap: u[3] };
            -1 !== f
              ? (o[f].references++, o[f].updater(h))
              : o.push({ identifier: l, updater: v(h, n), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function s(t) {
          var n = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var o = e.nc;
            o && (r.nonce = o);
          }
          if (
            (Object.keys(r).forEach(function (t) {
              n.setAttribute(t, r[t]);
            }),
            "function" == typeof t.insert)
          )
            t.insert(n);
          else {
            var a = i(t.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(n);
          }
          return n;
        }
        var c,
          l =
            ((c = []),
            function (t, n) {
              return (c[t] = n), c.filter(Boolean).join("\n");
            });
        function f(t, n, e, r) {
          var i = e
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (t.styleSheet) t.styleSheet.cssText = l(n, i);
          else {
            var o = document.createTextNode(i),
              a = t.childNodes;
            a[n] && t.removeChild(a[n]),
              a.length ? t.insertBefore(o, a[n]) : t.appendChild(o);
          }
        }
        function h(t, n, e) {
          var r = e.css,
            i = e.media,
            o = e.sourceMap;
          if (
            (i ? t.setAttribute("media", i) : t.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                " */"
              )),
            t.styleSheet)
          )
            t.styleSheet.cssText = r;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          d = 0;
        function v(t, n) {
          var e, r, i;
          if (n.singleton) {
            var o = d++;
            (e = p || (p = s(n))),
              (r = f.bind(null, e, o, !1)),
              (i = f.bind(null, e, o, !0));
          } else
            (e = s(n)),
              (r = h.bind(null, e, n)),
              (i = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(e);
              });
          return (
            r(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap
                )
                  return;
                r((t = n));
              } else i();
            }
          );
        }
        t.exports = function (t, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var e = u((t = t || []), n);
          return function (t) {
            if (
              ((t = t || []),
              "[object Array]" === Object.prototype.toString.call(t))
            ) {
              for (var r = 0; r < e.length; r++) {
                var i = a(e[r]);
                o[i].references--;
              }
              for (var s = u(t, n), c = 0; c < e.length; c++) {
                var l = a(e[c]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              e = s;
            }
          };
        };
      },
    },
    n = {};
  function e(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), o.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var t = e(379),
        n = e.n(t),
        r = e(28);
      n()(r.Z, { insert: "head", singleton: !1 }), r.Z.locals;
      var i,
        o,
        a,
        u = e(397),
        s = {
          series: [
            {
              visualization: u.VisualizationType.Points,
              name: "Points series",
              color: "red",
              xIndex: 0,
              yIndex: 0,
              visible: !0,
              tooltip: {
                visible: !1,
                formatter: function () {
                  return "";
                },
              },
              data: [],
            },
          ],
          xAxis: [
            {
              title: "XAxis label",
              scale: u.AxisScaleType.Time,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
          yAxis: [
            {
              title: "YAxis Label",
              scale: u.AxisScaleType.Linear,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
        },
        c = {
          series: [
            {
              visualization: u.VisualizationType.Line,
              name: "Line series",
              color: "#2D1C90",
              xIndex: 0,
              yIndex: 0,
              visible: !0,
              tooltip: {
                visible: !1,
                formatter: function () {
                  return "";
                },
              },
              data: [],
            },
          ],
          xAxis: [
            {
              title: "XAxis label",
              scale: u.AxisScaleType.Time,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
          yAxis: [
            {
              title: "YAxis Label",
              scale: u.AxisScaleType.Linear,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
        },
        l = {
          series: [
            {
              visualization: u.VisualizationType.Area,
              name: "Area series",
              color: "green",
              xIndex: 0,
              yIndex: 0,
              visible: !0,
              tooltip: {
                visible: !1,
                formatter: function () {
                  return "";
                },
              },
              data: [],
            },
          ],
          xAxis: [
            {
              title: "XAxis label",
              scale: u.AxisScaleType.Time,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
          yAxis: [
            {
              title: "YAxis Label",
              scale: u.AxisScaleType.Linear,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
        },
        f = {
          series: [
            {
              visualization: u.VisualizationType.Column,
              name: "Column series",
              color: "green",
              xIndex: 0,
              yIndex: 0,
              visible: !0,
              tooltip: {
                visible: !1,
                formatter: function () {
                  return "";
                },
              },
              data: [],
            },
          ],
          xAxis: [
            {
              title: "XAxis label",
              scale: u.AxisScaleType.Category,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
          yAxis: [
            {
              title: "YAxis Label",
              scale: u.AxisScaleType.Linear,
              grid: { visible: !0, color: "#D3D3D3" },
              visible: !0,
              opposite: !1,
              color: "#4b0082",
            },
          ],
        },
        h = document.getElementById("charts"),
        p = function () {
          var t = document.createElement("div");
          return h.appendChild(t), t;
        };
      (i = p()),
        (o = new u.CartesianChart(i, l)),
        (a = 0),
        setInterval(function () {
          o.addPoint(
            "Area series",
            { x: Date.now(), y: 1e3 * Math.random() * a++ },
            !0
          );
        }, 2e3),
        (function (t) {
          var n = new u.CartesianChart(t, c),
            e = 0;
          setInterval(function () {
            n.addPoint(
              "Line series",
              { x: Date.now(), y: 1e3 * Math.random() * e++ },
              !0
            );
          }, 2e3);
        })(p()),
        (function (t) {
          var n = new u.CartesianChart(t, s),
            e = 0;
          setInterval(function () {
            n.addPoint(
              "Points series",
              { x: Date.now(), y: 1e3 * Math.random() * e++ },
              !0
            );
          }, 2e3);
        })(p()),
        (function (t) {
          var n = new u.CartesianChart(t, f),
            e = 0;
          setInterval(function () {
            e < 10 &&
              n.addPoint(
                "Column series",
                { x: "cat" + e, y: 1e3 * Math.random() * e++ },
                !0
              );
          }, 2e3);
        })(p());
    })();
})();
//# sourceMappingURL=main.bundle.js.map
