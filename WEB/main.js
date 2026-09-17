const ACCION_NEUTRAL = 4;
const PRECIO_BASE_DEFAULT = 60;
const TARIFA_MAX_DEFAULT = 250;

let lang = 'es';
let D = {};

const i18n = {
  es: {
    hero_tag1: "Reinforcement Learning", hero_tag2: "Big Data",
    hero_title: "Motor de Precios <span class='text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-[#fb923c]'>Autónomo</span>",
    hero_desc: "Optimización dinámica para alta velocidad. Desplegado con PPO.",
    btn_entrar: "Acceder al Dashboard",
    breadcrumb: "Inicio → Dashboard", page_title: "Panel Principal",
    bread_metrix: "Inicio → Métricas", title_metrix: "Impacto de Negocio",
    bread_data: "Inicio → Datos", title_data: "Explorador de Datos",
    bread_docs: "Inicio → Docs", title_docs: "Arquitectura Técnica",
    btn_lang_es: "ES", btn_lang_en: "EN", btn_exportar: "Crear Reporte",
    tit_recom: "Recomendación IA", 
    sb_desc: "Tarifa neutra fijada por el modelo para mantener el equilibrio.",
    tit_params: "Configuración", lbl_ruta: "Corredor", lbl_dias: "Días Salida", lbl_plazas: "Inventario",
    kpi_tit_base: "Tarifa Base", kpi_tit_techo: "Techo Hist.", kpi_tit_var: "Variación", kpi_tit_final: "Precio Final",
    tit_gob: "Límite Aplicado", text_capado: "MÁXIMO",
    tit_heatmap: "Mapa Política", tit_curva: "Proyección Curva",
    met_t1: "Mejora vs Base", met_d1: "Incremento de ingresos simulado.",
    met_t2: "Ocupación Óptima", met_d2: "Plazas vendidas bajo PPO.",
    met_t3: "Significancia", met_d3: "Validado vía Bootstrap.",
    met_subt: "Simulación Monte Carlo", met_subd: "Agregado de 36 rutas fuera de muestra.",
    met_l1: "Agente PPO", met_l2: "Heurística Comercial", met_l3: "Política Fija",
    dat_ruta: "Ruta:", dat_filtro: "Filtro:", dat_o1: "Todo (0-30d)", dat_o2: "Cercano (0-7d)", dat_o3: "Medio (8-15d)", dat_o4: "Lejano (16-30d)",
    dat_th1: "Días Salida", dat_th2: "Precio Base", dat_th3: "Estado",
    doc_t1: "Pipeline ETL (PySpark)", doc_d1: "Procesamiento distribuido con particionamiento temporal para aislar sets de validación. Limpieza de datos atípicos.",
    doc_t2: "Entorno (Gymnasium)", doc_d2: "Simulación estocástica de Poisson integrada con curvas de elasticidad precio. Penalizaciones por inventario vacío.",
    doc_t3: "Optimización (PPO)", doc_d3: "Reward shaping guiado por programación dinámica para maximizar ingreso esperado y evitar el colapso de política.",
    doc_t4: "Validación Monte Carlo", doc_d4: "Contraste robusto vs heurísticas comerciales usando intervalos de confianza Bootstrap sobre 1000 iteraciones en el test set.",
    plot_x_h: "Lead Time (Días)", plot_y_h: "Asientos Disp.", plot_x_c: "Días Antelación", plot_y_c: "Precio (€)"
  },
  en: {
    hero_tag1: "Reinforcement Learning", hero_tag2: "Big Data",
    hero_title: "Autonomous <span class='text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-[#fb923c]'>Pricing Engine</span>",
    hero_desc: "Dynamic optimization for high-speed rail. Deployed with PPO.",
    btn_entrar: "Launch Dashboard",
    breadcrumb: "Home → Dashboard", page_title: "Control Panel",
    bread_metrix: "Home → Metrics", title_metrix: "Business Impact",
    bread_data: "Home → Data", title_data: "Data Explorer",
    bread_docs: "Home → Docs", title_docs: "Technical Architecture",
    btn_lang_es: "ES", btn_lang_en: "EN", btn_exportar: "Export Report",
    tit_recom: "AI Recommendation", 
    sb_desc: "Fare set by the model to maintain capacity equilibrium.",
    tit_params: "Settings", lbl_ruta: "Corridor", lbl_dias: "Lead Time", lbl_plazas: "Inventory",
    kpi_tit_base: "Base Fare", kpi_tit_techo: "Historical Ceiling", kpi_tit_var: "Variation", kpi_tit_final: "Final Price",
    tit_gob: "Limit Applied", text_capado: "MAX CAPPED",
    tit_heatmap: "Policy Map", tit_curva: "Fare Projection",
    met_t1: "Uplift vs Base", met_d1: "Simulated revenue increment.",
    met_t2: "Optimal Capacity", met_d2: "Seats sold under PPO policy.",
    met_t3: "Significance", met_d3: "Validated via Bootstrap.",
    met_subt: "Monte Carlo Simulation", met_subd: "Aggregated 36 out-of-sample routes.",
    met_l1: "PPO Agent", met_l2: "Commercial Heuristic", met_l3: "Fixed Policy",
    dat_ruta: "Route:", dat_filtro: "Filter:", dat_o1: "All (0-30d)", dat_o2: "Close (0-7d)", dat_o3: "Mid (8-15d)", dat_o4: "Far (16-30d)",
    dat_th1: "Lead Time", dat_th2: "Base Fare", dat_th3: "Status",
    doc_t1: "ETL Pipeline (PySpark)", doc_d1: "Distributed processing with temporal partitioning to isolate validation sets. Outlier cleaning included.",
    doc_t2: "Environment (Gymnasium)", doc_d2: "Stochastic Poisson simulation integrated with price elasticity curves. Penalties for empty inventory.",
    doc_t3: "Optimization (PPO)", doc_d3: "Dynamic Programming guided reward shaping to maximize expected revenue avoiding policy collapse.",
    doc_t4: "Monte Carlo Validation", doc_d4: "Robust comparison vs commercial heuristics using Bootstrap confidence intervals over 1000 iterations.",
    plot_x_h: "Lead Time (Days)", plot_y_h: "Available Seats", plot_x_c: "Days in Advance", plot_y_c: "Price (€)"
  }
};

const ACCIONES_INFO = {
  es: {
    0: { mult: 0.60, bg: "bg-rose-100", txt: "text-rose-700" },
    1: { mult: 0.70, bg: "bg-rose-100", txt: "text-rose-700" },
    2: { mult: 0.80, bg: "bg-rose-100", txt: "text-rose-700" },
    3: { mult: 0.90, bg: "bg-white/20", txt: "text-white" },
    4: { mult: 1.00, bg: "bg-white/20", txt: "text-white" },
    5: { mult: 1.10, bg: "bg-white/20", txt: "text-white" },
    6: { mult: 1.20, bg: "bg-orange-100", txt: "text-orange-700" },
    7: { mult: 1.30, bg: "bg-orange-100", txt: "text-orange-700" },
    8: { mult: 1.40, bg: "bg-orange-200", txt: "text-orange-800" }
  },
  en: {
    0: { mult: 0.60, bg: "bg-rose-100", txt: "text-rose-700" },
    1: { mult: 0.70, bg: "bg-rose-100", txt: "text-rose-700" },
    2: { mult: 0.80, bg: "bg-rose-100", txt: "text-rose-700" },
    3: { mult: 0.90, bg: "bg-white/20", txt: "text-white" },
    4: { mult: 1.00, bg: "bg-white/20", txt: "text-white" },
    5: { mult: 1.10, bg: "bg-white/20", txt: "text-white" },
    6: { mult: 1.20, bg: "bg-orange-100", txt: "text-orange-700" },
    7: { mult: 1.30, bg: "bg-orange-100", txt: "text-orange-700" },
    8: { mult: 1.40, bg: "bg-orange-200", txt: "text-orange-800" }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CEREBRO_IA === "undefined") return;

  D = {
    selectorRuta: document.getElementById("selector_ruta"),
    selectorRutaDatos: document.getElementById("selector_ruta_datos"),
    sliderDias: document.getElementById("slider_dias"),
    sliderAsientos: document.getElementById("slider_asientos"),
    txtDias: document.getElementById("txt_dias"),
    txtAsientos: document.getElementById("txt_asientos"),
    sbPct: document.getElementById("sb_pct"),
    sbMultiplicador: document.getElementById("sb_multiplicador"),
    sbAccion: document.getElementById("sb_accion"),
    kpiBase: document.getElementById("kpi_base"),
    kpiTecho: document.getElementById("kpi_techo"),
    kpiVarTexto: document.getElementById("kpi_var_texto"),
    kpiFinal: document.getElementById("kpi_final"),
    bannerGob: document.getElementById("banner_gobernanza"),
    titGob: document.getElementById("tit_gob"),
    descGob: document.getElementById("desc_gobernanza")
  };

  document.getElementById("btn_entrar").addEventListener("click", () => {
    document.getElementById("vista_portada").classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      document.getElementById("vista_portada").classList.add("hidden");
      document.getElementById("app_container").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("app_container").classList.remove("opacity-0");
        update(true);
      }, 50);
    }, 700);
  });

  document.getElementById("btn_lang_es").addEventListener("click", () => setLang('es'));
  document.getElementById("btn_lang_en").addEventListener("click", () => setLang('en'));
  document.getElementById("btn_exportar").addEventListener("click", exportarReporteCSV);
  
  ['dashboard', 'metrix', 'datos', 'docs'].forEach(tab => {
    document.getElementById(`btn_tab_${tab}`).addEventListener("click", () => switchTab(tab));
  });

  D.selectorRuta.addEventListener("change", () => {
    D.selectorRutaDatos.value = D.selectorRuta.value;
    update(true);
    if (!document.getElementById('vista_datos').classList.contains('hidden')) poblarTablaDatos();
  });

  D.selectorRutaDatos.addEventListener("change", () => {
    D.selectorRuta.value = D.selectorRutaDatos.value;
    update(true);
    poblarTablaDatos();
  });

  D.sliderDias.addEventListener("input", () => update(false));
  D.sliderAsientos.addEventListener("input", () => update(false));
  document.getElementById("filtro_rango_dias").addEventListener("change", poblarTablaDatos);

  Object.keys(CEREBRO_IA).forEach(ruta => {
    const rName = ruta.replace("_", " ➔ ");
    D.selectorRuta.add(new Option(rName, ruta));
    D.selectorRutaDatos.add(new Option(rName, ruta));
  });

  setLang('es');

  // ResizeObserver Mágico
  const resizeObserver = new ResizeObserver(() => {
      if (!document.getElementById('vista_dashboard').classList.contains('hidden')) {
          Plotly.Plots.resize('grafico_heatmap');
          Plotly.Plots.resize('grafico_curva');
      }
  });
  resizeObserver.observe(document.getElementById('vista_dashboard'));
});

function animarValor(elemento, valorFinal) {
  const actual = parseFloat(elemento.textContent) || (valorFinal * 0.8);
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / 300, 1);
    elemento.textContent = (actual + progress * (valorFinal - actual)).toFixed(2);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function exportarReporteCSV() {
  const ruta = D.selectorRuta.value, dias = D.sliderDias.value, asientos = D.sliderAsientos.value;
  const data = CEREBRO_IA[ruta];
  const accion = data.politica[`${dias}_${asientos}`] ?? ACCION_NEUTRAL;
  const pBase = data.precios_base[String(dias)] || PRECIO_BASE_DEFAULT;
  let mult = 1.0;
  
  if(accion === 0) mult = 0.6; else if(accion === 1) mult = 0.7; else if(accion === 2) mult = 0.8;
  else if(accion === 3) mult = 0.9; else if(accion === 4) mult = 1.0; else if(accion === 5) mult = 1.1;
  else if(accion === 6) mult = 1.2; else if(accion === 7) mult = 1.3; else if(accion === 8) mult = 1.4;

  const pFinal = Math.min(pBase * mult, data.tarifa_maxima);
  
  const cabeceras = "Corredor,LeadTime,Inventario,TarifaBase,Mult,Accion,PrecioFinal\n";
  const valores = `${ruta},${dias},${asientos},${pBase.toFixed(2)},${mult},${accion},${pFinal.toFixed(2)}`;
  
  const blob = new Blob(["\uFEFF" + cabeceras + valores], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Reporte_${ruta}.csv`;
  a.click();
}

function setLang(l) {
  lang = l;
  const isEs = lang === 'es';
  const btnActive = "px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-slate-900 text-white transition-all shadow-sm";
  const btnInactive = "px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-slate-500 hover:text-slate-900 transition-all";
  
  document.getElementById('btn_lang_es').className = isEs ? btnActive : btnInactive;
  document.getElementById('btn_lang_en').className = !isEs ? btnActive : btnInactive;

  Object.keys(i18n[lang]).forEach(key => {
    const el = document.getElementById(key);
    if(el) el.innerHTML = i18n[lang][key];
  });
  
  if (D.selectorRuta && D.selectorRuta.value) {
    update(true);
    if (!document.getElementById('vista_datos').classList.contains('hidden')) poblarTablaDatos();
  }
}

function switchTab(tab) {
  const tabs = ['dashboard', 'metrix', 'datos', 'docs'];
  const activeBtn = "w-12 h-12 lg:w-full lg:h-auto lg:aspect-square rounded-[1rem] lg:rounded-2xl bg-slate-900 text-white flex justify-center items-center shadow-md transition-all group";
  const inactiveBtn = "w-12 h-12 lg:w-full lg:h-auto lg:aspect-square rounded-[1rem] lg:rounded-2xl bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-900 flex justify-center items-center shadow-sm border border-slate-100 transition-all group";

  tabs.forEach(t => {
    document.getElementById(`vista_${t}`).classList.add('hidden');
    document.getElementById(`vista_${t}`).classList.remove('flex');
    document.getElementById(`btn_tab_${t}`).className = (t === tab) ? activeBtn : inactiveBtn;
  });

  document.getElementById(`vista_${tab}`).classList.remove('hidden');
  document.getElementById(`vista_${tab}`).classList.add('flex');
  
  const breadKeys = { 'dashboard': 'breadcrumb', 'metrix': 'bread_metrix', 'datos': 'bread_data', 'docs': 'bread_docs' };
  const titleKeys = { 'dashboard': 'page_title', 'metrix': 'title_metrix', 'datos': 'title_data', 'docs': 'title_docs' };
  
  document.getElementById('breadcrumb').textContent = i18n[lang][breadKeys[tab]];
  document.getElementById('page_title').textContent = i18n[lang][titleKeys[tab]];

  if(tab === 'dashboard') {
    setTimeout(() => { Plotly.Plots.resize('grafico_heatmap'); Plotly.Plots.resize('grafico_curva'); }, 50);
  } else if(tab === 'datos') {
    poblarTablaDatos();
  }
}

function poblarTablaDatos() {
  const data = CEREBRO_IA[D.selectorRutaDatos.value];
  const cuerpo = document.getElementById("cuerpo_tabla_datos");
  const filtro = document.getElementById("filtro_rango_dias").value;
  
  document.getElementById("info_ruta_activa").textContent = D.selectorRutaDatos.options[D.selectorRutaDatos.selectedIndex].text;
  cuerpo.innerHTML = "";

  let count = 0;
  for (let d = 0; d <= 30; d++) {
    if (filtro === "cercanos" && (d < 0 || d > 7)) continue;
    if (filtro === "medios" && (d < 8 || d > 15)) continue;
    if (filtro === "lejanos" && (d < 16 || d > 30)) continue;

    count++;
    const precio = data.precios_base[String(d)] || PRECIO_BASE_DEFAULT;
    const tr = document.createElement("tr");
    tr.className = "hover:bg-[#f4f5f8] transition-colors border-b border-slate-50";
    tr.innerHTML = `
      <td class="py-3 sm:py-4 px-2 font-bold text-slate-800">${d}</td>
      <td class="py-3 sm:py-4 px-2 font-mono text-slate-800 font-bold">${precio.toFixed(2)} €</td>
      <td class="py-3 sm:py-4 px-2"><span class="bg-slate-900 text-white px-2.5 sm:px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">PPO Active</span></td>
    `;
    cuerpo.appendChild(tr);
  }
  document.getElementById("contador_registros").textContent = `${count} ${lang === 'es' ? 'registros' : 'records'}`;
}

function update(redrawCharts) {
  if (!D.selectorRuta || !D.selectorRuta.value) return;
  
  const ruta = D.selectorRuta.value;
  const dias = parseInt(D.sliderDias.value);
  const asientos = parseInt(D.sliderAsientos.value);
  const data = CEREBRO_IA[ruta];

  if (!data) return;

  D.txtDias.textContent = dias; D.txtAsientos.textContent = asientos;

  const accion = data.politica[`${dias}_${asientos}`] ?? ACCION_NEUTRAL;
  
  let mult = 1.0; let badge = "0%";
  if(accion === 0) { mult = 0.6; badge = "-40%"; }
  else if(accion === 1) { mult = 0.7; badge = "-30%"; }
  else if(accion === 2) { mult = 0.8; badge = "-20%"; }
  else if(accion === 3) { mult = 0.9; badge = "-10%"; }
  else if(accion === 5) { mult = 1.1; badge = "+10%"; }
  else if(accion === 6) { mult = 1.2; badge = "+20%"; }
  else if(accion === 7) { mult = 1.3; badge = "+30%"; }
  else if(accion === 8) { mult = 1.4; badge = "+40%"; }

  const info = ACCIONES_INFO[lang][accion];
  const pBase = data.precios_base[String(dias)] || PRECIO_BASE_DEFAULT;
  const max = data.tarifa_maxima || TARIFA_MAX_DEFAULT; 

  const pCrudo = pBase * mult;
  const veto = pCrudo > max;
  const pFinal = veto ? max : pCrudo;

  D.sbMultiplicador.textContent = mult.toFixed(2);
  D.sbAccion.textContent = accion;
  D.sbPct.textContent = badge;

  animarValor(D.kpiBase, pBase); animarValor(D.kpiTecho, max); animarValor(D.kpiFinal, pFinal);

  const varPct = ((pFinal - pBase) / pBase) * 100;
  if (veto) {
    D.kpiVarTexto.innerHTML = `<span class="text-rose-600 font-bold text-xs bg-rose-50 px-2 py-0.5 rounded border border-rose-100">${i18n[lang].text_capado}</span>`;
    D.descGob.innerHTML = lang === 'es' ? `Límite (${max}€).` : `Cap (${max}€).`;
    D.bannerGob.classList.remove("hidden");
  } else {
    D.kpiVarTexto.innerHTML = `<span class="${varPct > 0 ? 'text-orange-500' : varPct < 0 ? 'text-emerald-500' : 'text-slate-400'} font-black text-lg">${varPct > 0 ? '+' : ''}${varPct.toFixed(1)}%</span>`;
    D.bannerGob.classList.add("hidden");
  }

  const config = { responsive: true, displayModeBar: false };

  const customColorscale = [
    [0, '#fff1f2'], 
    [0.3, '#fecdd3'], 
    [0.6, '#fb923c'], 
    [1, '#e11d48']  
  ];

  if (redrawCharts) {
    const z = [];
    for (let a = 100; a >= 0; a--) {
      const row = [];
      for (let d = 0; d <= 30; d++) row.push(data.politica[`${d}_${a}`] ?? ACCION_NEUTRAL);
      z.push(row);
    }
    
    Plotly.react('grafico_heatmap', [
      {
        z, x: Array.from({length: 31}, (_, i) => i), y: Array.from({length: 101}, (_, i) => i).reverse(),
        type: 'heatmap', colorscale: customColorscale, showscale: false,
        hovertemplate: 'Lead Time: %{x}d<br>Asientos: %{y}<br>Acción: %{z}<extra></extra>'
      },
      {
        x: [dias], y: [asientos], mode: 'markers', marker: { color: '#ffffff', size: 10, line: { color: '#0f172a', width: 2.5 } }, hoverinfo: 'skip'
      }
    ], { 
      margin: { t: 5, r: 10, b: 35, l: 30 },
      xaxis: { title: {text: i18n[lang].plot_x_h, font: {size: 10, color: '#94a3b8'}}, tickfont: {size: 10, color: '#94a3b8'}, gridcolor: '#f8f9fa', zerolinecolor: '#f8f9fa' }, 
      yaxis: { title: {text: i18n[lang].plot_y_h, font: {size: 10, color: '#94a3b8'}}, tickfont: {size: 10, color: '#94a3b8'}, gridcolor: '#f8f9fa', zerolinecolor: '#f8f9fa' },
      paper_bgcolor: 'transparent', plot_bgcolor: 'transparent'
    }, config);

    const dX = Array.from({ length: 31 }, (_, i) => i);
    const pY = dX.map(d => data.precios_base[String(d)] || PRECIO_BASE_DEFAULT);
    
    Plotly.newPlot('grafico_curva', [
      {
        x: dX, y: pY, type: 'scatter', mode: 'lines', line: { color: '#f43f5e', width: 3, shape: 'spline' },
        fill: 'tozeroy', fillcolor: 'rgba(244, 63, 94, 0.08)',
        hovertemplate: 'Día: %{x}<br>Precio: %{y:.2f}€<extra></extra>'
      }, 
      {
        x: [0, 30], y: [max, max], type: 'scatter', mode: 'lines', line: { color: '#fb923c', dash: 'dash', width: 2 }, hoverinfo: 'skip'
      },
      {
        x: [dias], y: [pY[dias]], type: 'scatter', mode: 'markers', marker: { color: '#0f172a', size: 8, line: { color: '#ffffff', width: 2 } }, hoverinfo: 'skip'
      }
    ], { 
      margin: { t: 5, r: 10, b: 35, l: 30 },
      xaxis: { title: {text: i18n[lang].plot_x_c, font: {size: 10, color: '#94a3b8'}}, tickfont: {size: 10, color: '#94a3b8'}, gridcolor: '#f8f9fa', zerolinecolor: '#f8f9fa' }, 
      yaxis: { title: {text: i18n[lang].plot_y_c, font: {size: 10, color: '#94a3b8'}}, tickfont: {size: 10, color: '#94a3b8'}, gridcolor: '#f8f9fa', zerolinecolor: '#f8f9fa' },
      paper_bgcolor: 'transparent', plot_bgcolor: 'transparent', showlegend: false
    }, config);
  } else {
    Plotly.restyle('grafico_heatmap', { 'x': [[dias]], 'y': [[asientos]] }, [1]);
    
    const pY = data.precios_base[String(dias)] || PRECIO_BASE_DEFAULT;
    Plotly.restyle('grafico_curva', { 'x': [[dias]], 'y': [[pY]] }, [2]);
  }
}