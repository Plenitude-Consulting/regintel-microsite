/* @ds-bundle: {"format":4,"namespace":"PlenitudeDesignSystem_776e17","components":[],"sourceHashes":{"ui_kits/regtech/FilingDrawer.jsx":"0858fd35659f","ui_kits/regtech/KpiStrip.jsx":"de882cbf46cf","ui_kits/regtech/PipelineChart.jsx":"7b7feb1b8803","ui_kits/regtech/ReportsTable.jsx":"65adee1be801","ui_kits/regtech/Sidebar.jsx":"2724e48c2a5d","ui_kits/regtech/Topbar.jsx":"72c8aa407018","ui_kits/website/CaseStudy.jsx":"d5cfd260f7d1","ui_kits/website/Footer.jsx":"f20562aea5c4","ui_kits/website/Header.jsx":"57048fd3b533","ui_kits/website/Hero.jsx":"b8431937b4da","ui_kits/website/InsightList.jsx":"395d4173c41c","ui_kits/website/ProductRow.jsx":"13190f09991d","ui_kits/website/ServiceGrid.jsx":"ce43adb5f308"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PlenitudeDesignSystem_776e17 = window.PlenitudeDesignSystem_776e17 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/regtech/FilingDrawer.jsx
try { (() => {
function FilingDrawer({
  row,
  onClose
}) {
  if (!row) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,22,40,0.4)',
      zIndex: 40,
      animation: 'fade 200ms'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 460,
      background: '#fff',
      boxShadow: '0 8px 24px rgba(0, 41, 89, 0.10), 0 2px 6px rgba(0, 41, 89, 0.05)',
      zIndex: 41,
      display: 'flex',
      flexDirection: 'column',
      animation: 'slideIn 240ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: '1px solid var(--ink-200)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--core-green)'
    }
  }, row.regime), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--fg-1)',
      marginTop: 4
    }
  }, row.firm), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-500)',
      marginTop: 2
    }
  }, row.ref)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      fontSize: 22,
      color: 'var(--ink-500)',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 22
    }
  }, [{
    k: 'Transactions',
    v: row.txns.toLocaleString()
  }, {
    k: 'Due',
    v: row.due
  }, {
    k: 'Validated',
    v: '99.2%'
  }, {
    k: 'Exceptions',
    v: '8'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.k,
    style: {
      background: 'var(--ink-50)',
      borderRadius: 4,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, m.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--fg-1)',
      marginTop: 4
    }
  }, m.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--fg-1)',
      marginBottom: 10
    }
  }, "Pipeline"), /*#__PURE__*/React.createElement("ol", {
    style: {
      padding: 0,
      listStyle: 'none',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      borderLeft: '2px solid var(--ink-200)',
      paddingLeft: 16
    }
  }, [{
    label: 'Ingested from source',
    t: '10:02',
    done: true
  }, {
    label: 'Validated against ruleset v4.1',
    t: '10:14',
    done: true
  }, {
    label: 'Enriched & reconciled',
    t: '10:22',
    done: true
  }, {
    label: 'Submitted to FCA',
    t: '10:42',
    done: true
  }, {
    label: 'Acknowledged',
    t: '—',
    done: false
  }].map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -22,
      top: 12,
      width: 10,
      height: 10,
      borderRadius: 999,
      background: s.done ? 'var(--core-green)' : '#fff',
      border: '2px solid ' + (s.done ? 'var(--core-green)' : 'var(--ink-300)')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: s.done ? 'var(--fg-1)' : 'var(--ink-500)',
      fontWeight: s.done ? 600 : 400
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-500)',
      fontFamily: 'var(--font-mono)'
    }
  }, s.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      marginTop: 20,
      borderLeft: '3px solid var(--mid-blue)',
      background: '#E6F8FE'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#006B99'
    }
  }, "8 exceptions need review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-2)',
      marginTop: 3
    }
  }, "Most relate to LEI lookup mismatches. Auto-retry scheduled for 14:00."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      borderTop: '1px solid var(--ink-200)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      background: 'var(--core-blue)',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      padding: '11px',
      cursor: 'pointer'
    }
  }, "Open full report"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      background: 'transparent',
      color: 'var(--core-blue)',
      border: '1.5px solid var(--core-blue)',
      borderRadius: 4,
      padding: '11px 16px',
      cursor: 'pointer'
    }
  }, "Export"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { from { transform: translateX(24px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
      `));
}
window.FilingDrawer = FilingDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/FilingDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/regtech/KpiStrip.jsx
try { (() => {
function KpiStrip() {
  const kpis = [{
    label: 'Filings this quarter',
    value: '2,148',
    delta: '+12.3%',
    positive: true,
    color: 'var(--core-blue)'
  }, {
    label: 'First-pass accuracy',
    value: '99.4%',
    delta: '+0.2 pp',
    positive: true,
    color: 'var(--core-green)'
  }, {
    label: 'Exceptions open',
    value: '23',
    delta: '−7',
    positive: true,
    color: 'var(--mid-blue)'
  }, {
    label: 'Breaches (rolling 30d)',
    value: '1',
    delta: '1 new',
    positive: false,
    color: '#C03221'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement("div", {
    key: k.label,
    style: {
      background: '#fff',
      border: '1px solid var(--ink-200)',
      borderRadius: 8,
      padding: '18px 20px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: k.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--fg-1)',
      marginTop: 8,
      letterSpacing: '-0.015em',
      lineHeight: 1
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      fontWeight: 700,
      color: k.positive ? 'var(--core-green)' : '#C03221'
    }
  }, k.delta))));
}
window.KpiStrip = KpiStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/KpiStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/regtech/PipelineChart.jsx
try { (() => {
function PipelineChart() {
  // Fake daily series for 14 days: MiFID, EMIR, SFTR
  const days = Array.from({
    length: 14
  }, (_, i) => {
    return {
      day: i + 1,
      mifid: 40 + Math.round(Math.sin(i / 2) * 12 + Math.random() * 10),
      emir: 20 + Math.round(Math.cos(i / 3) * 8 + Math.random() * 8),
      sftr: 10 + Math.round(Math.sin(i / 4) * 4 + Math.random() * 6)
    };
  });
  const max = Math.max(...days.map(d => d.mifid + d.emir + d.sftr));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--ink-200)',
      borderRadius: 8,
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Pipeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--fg-1)',
      marginTop: 4
    }
  }, "Submissions by regime \xB7 last 14 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--core-blue)',
      borderRadius: 2
    }
  }), "MiFID II"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--mid-blue)',
      borderRadius: 2
    }
  }), "EMIR"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--second-dark-blue)',
      borderRadius: 2
    }
  }), "SFTR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'end',
      gap: 6,
      height: 160
    }
  }, days.map(d => {
    const total = d.mifid + d.emir + d.sftr;
    const h = total / max * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: d.day,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: `${h}%`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: d.mifid,
        background: 'var(--core-blue)',
        borderRadius: '2px 2px 0 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: d.emir,
        background: 'var(--mid-blue)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: d.sftr,
        background: 'var(--second-dark-blue)',
        borderRadius: '0 0 2px 2px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-500)',
        textAlign: 'center',
        marginTop: 4
      }
    }, d.day));
  })));
}
window.PipelineChart = PipelineChart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/PipelineChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/regtech/ReportsTable.jsx
try { (() => {
function ReportsTable({
  onSelect
}) {
  const rows = [{
    ref: 'MER-25-0412-A',
    firm: 'Meridian Asset Mgmt',
    regime: 'MiFID II',
    due: '30 Apr',
    txns: 12480,
    status: 'active'
  }, {
    ref: 'NTH-25-0411-E',
    firm: 'Northgate Capital',
    regime: 'EMIR',
    due: '17 Apr',
    txns: 4280,
    status: 'due'
  }, {
    ref: 'HLX-25-0411-S',
    firm: 'Helix Securities',
    regime: 'SFTR',
    due: '22 Apr',
    txns: 988,
    status: 'review'
  }, {
    ref: 'KWN-25-0410-A',
    firm: 'Kew Wealth',
    regime: 'MiFID II',
    due: '10 Apr',
    txns: 3122,
    status: 'overdue'
  }, {
    ref: 'ARC-25-0409-D',
    firm: 'Arcadia Bank plc',
    regime: 'DORA',
    due: '—',
    txns: 0,
    status: 'draft'
  }, {
    ref: 'VLT-25-0408-A',
    firm: 'Valent Trading',
    regime: 'MiFID II',
    due: '28 Apr',
    txns: 7604,
    status: 'active'
  }];
  const statusChip = s => {
    const map = {
      active: {
        bg: '#F0FAF1',
        fg: '#327D2B',
        dot: '#47A340',
        label: 'Active'
      },
      due: {
        bg: '#FDF6EC',
        fg: '#8A5A14',
        dot: '#E8A53C',
        label: 'Due soon'
      },
      review: {
        bg: '#E6F8FE',
        fg: '#006B99',
        dot: '#00B5ED',
        label: 'In review'
      },
      overdue: {
        bg: '#FBEEEC',
        fg: '#8A1F13',
        dot: '#C03221',
        label: 'Overdue'
      },
      draft: {
        bg: '#F1F5F9',
        fg: '#334155',
        dot: '#64748B',
        label: 'Draft'
      }
    }[s];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 10px',
        borderRadius: 999,
        background: map.bg,
        color: map.fg,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.03em'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: map.dot
      }
    }), map.label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--ink-200)',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--fg-1)'
    }
  }, "Q1 filings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['All', 'MiFID II', 'EMIR', 'SFTR', 'DORA'].map((f, i) => /*#__PURE__*/React.createElement("button", {
    key: f,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      padding: '5px 10px',
      borderRadius: 4,
      cursor: 'pointer',
      border: '1px solid ' + (i === 0 ? 'var(--core-blue)' : 'var(--ink-200)'),
      background: i === 0 ? 'var(--core-blue)' : '#fff',
      color: i === 0 ? '#fff' : 'var(--fg-2)'
    }
  }, f)))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Reference', 'Firm', 'Regime', 'Due', 'Transactions', 'Status', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 20px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      background: 'var(--ink-50)',
      borderBottom: '1px solid var(--ink-200)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.ref,
    onClick: () => onSelect && onSelect(r),
    style: {
      borderBottom: '1px solid var(--ink-200)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--fg-1)',
      fontWeight: 600
    }
  }, r.ref), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, r.firm), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      color: 'var(--fg-2)'
    }
  }, r.regime), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      color: 'var(--fg-2)'
    }
  }, r.due), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      color: 'var(--fg-2)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.txns.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, statusChip(r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      color: 'var(--ink-500)',
      fontSize: 16
    }
  }, "\u203A"))))));
}
window.ReportsTable = ReportsTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/ReportsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/regtech/Sidebar.jsx
try { (() => {
const {
  useState: useStateSidebar
} = React;
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'reports',
    label: 'Reports',
    active: true
  }, {
    id: 'rules',
    label: 'Rules engine'
  }, {
    id: 'firms',
    label: 'Firms & entities'
  }, {
    id: 'exceptions',
    label: 'Exceptions'
  }, {
    id: 'insight',
    label: 'Insight'
  }];
  const products = [{
    id: 'mifid',
    label: 'Transaction Reporting',
    regime: 'MiFID II',
    accent: 'var(--mid-blue)'
  }, {
    id: 'aml',
    label: 'AML Screening',
    regime: 'JMLSG',
    accent: 'var(--second-blue)'
  }, {
    id: 'dora',
    label: 'DORA Register',
    regime: 'DORA',
    accent: 'var(--second-dark-blue)'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: 'var(--core-blue)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/plenitude-icon-white.png",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1
    }
  }, "Plenitude"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.6)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginTop: 3
    }
  }, "RegTech Products"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '16px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.id,
    onClick: () => onNav && onNav(i.id),
    style: {
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '9px 12px',
      border: 0,
      borderRadius: 4,
      cursor: 'pointer',
      background: active === i.id ? 'rgba(0,181,237,0.16)' : 'transparent',
      color: active === i.id ? '#fff' : 'rgba(255,255,255,0.75)',
      borderLeft: active === i.id ? '2px solid var(--mid-blue)' : '2px solid transparent',
      transition: 'all 150ms var(--ease-out)'
    }
  }, i.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "Products"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      padding: '10px 12px',
      borderRadius: 4,
      background: 'rgba(255,255,255,0.04)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 26,
      background: p.accent,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#fff'
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 1
    }
  }, p.regime))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '14px 20px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--light-green)'
    }
  }), "All systems operational")));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/regtech/Topbar.jsx
try { (() => {
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 28px',
      background: '#fff',
      borderBottom: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-500)',
      fontWeight: 500
    }
  }, "RegTech ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)',
      margin: '0 6px'
    }
  }, "/"), "Transaction Reporting ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)',
      margin: '0 6px'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)',
      fontWeight: 700
    }
  }, "Q1 filings")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--core-blue)',
      margin: '4px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Transaction Reporting")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search reports, firms, refs\u2026",
    style: {
      width: 280,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      padding: '9px 14px 9px 36px',
      border: '1px solid var(--ink-300)',
      borderRadius: 4,
      background: 'var(--ink-50)',
      color: 'var(--fg-1)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 14,
      color: 'var(--ink-500)'
    }
  }, "\u2315")), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      background: 'var(--core-blue)',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      padding: '9px 16px',
      cursor: 'pointer'
    }
  }, "+ New filing"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'var(--dark-green)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 13
    }
  }, "AM")));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/regtech/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudy.jsx
try { (() => {
function CaseStudy() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--core-blue)',
      color: '#fff',
      padding: '96px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '36%',
      height: '100%',
      background: 'linear-gradient(180deg, #47A340 0%, #006975 100%)',
      clipPath: 'polygon(18% 0, 100% 0, 82% 100%, 0 100%)',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--light-green)'
    }
  }, "Featured case"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      margin: '12px 0 20px',
      letterSpacing: '-0.015em',
      lineHeight: 1.1
    }
  }, "A tier-1 bank cut manual reconciliation by ~40%."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.78)',
      margin: '0 0 28px',
      maxWidth: 500
    }
  }, "We re-architected their MiFID II transaction pipeline \u2014 from upstream capture to FCA submission \u2014 and delivered an ongoing managed service around the output."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginBottom: 32
    }
  }, [{
    k: '~40%',
    v: 'reduction in manual\nreconciliation'
  }, {
    k: '99.4%',
    v: 'first-pass submission\naccuracy'
  }, {
    k: '14 wk',
    v: 'from contract\nto go-live'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 900,
      color: 'var(--light-green)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, m.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 6,
      whiteSpace: 'pre-line'
    }
  }, m.v)))), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn-accent"
  }, "Read the case study")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      aspectRatio: '3/4',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 8,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/plenitude-icon-white.png",
    style: {
      height: 64,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Client"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      marginTop: 6
    }
  }, "Global Tier-1 Bank"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.65)',
      marginTop: 2
    }
  }, "Investment banking \xB7 London"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.15)',
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Engagement"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "RegTech Products + Managed Service, 2024\u2013ongoing"))))));
}
window.CaseStudy = CaseStudy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const cols = [{
    h: 'Services',
    items: ['Regulatory advisory', 'RegTech Products', 'Managed Service', 'Training']
  }, {
    h: 'Products',
    items: ['Transaction Reporting', 'AML Screening', 'DORA Register', 'Horizon Scanning']
  }, {
    h: 'Company',
    items: ['About', 'Careers', 'Insight', 'Contact']
  }, {
    h: 'Legal',
    items: ['Privacy', 'Modern slavery', 'Cookies', 'Accessibility']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#001a3c',
      color: 'rgba(255,255,255,0.78)',
      padding: '80px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr repeat(4, 1fr)',
      gap: 48,
      paddingBottom: 56,
      borderBottom: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/plenitude-logo-white.png",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      marginTop: 20,
      maxWidth: 260
    }
  }, "Plenitude Consulting \u2014 regulatory expertise, products, and managed services for financial institutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--light-green)',
      marginTop: 24
    }
  }, "Built by practitioners.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 13,
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 28,
      fontSize: 12,
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Plenitude Consulting Ltd. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "LinkedIn"), /*#__PURE__*/React.createElement("span", null, "X"), /*#__PURE__*/React.createElement("span", null, "RSS")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  useState
} = React;
function Header() {
  const [open, setOpen] = useState(null);
  const items = ['About', 'RegTech Products', 'Managed Service', 'Insight', 'Careers'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/plenitude-logo-color.png",
    alt: "Plenitude",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onMouseEnter: () => setOpen(i),
    onMouseLeave: () => setOpen(null),
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: open === i ? 'var(--mid-blue)' : 'var(--fg-1)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 200ms var(--ease-out)'
    }
  }, i))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg-1)',
      textDecoration: 'none'
    }
  }, "Client login"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn-primary"
  }, "Talk to us"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--core-blue)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: '38%',
      width: '14%',
      height: '72%',
      background: 'linear-gradient(180deg, #0094D4 0%, #002959 100%)',
      clipPath: 'polygon(30% 0, 100% 0, 70% 100%, 0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: '22%',
      width: '16%',
      height: '88%',
      background: 'linear-gradient(180deg, #00B5ED 0%, #006975 100%)',
      clipPath: 'polygon(30% 0, 100% 0, 70% 100%, 0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: '4%',
      width: '18%',
      height: '100%',
      background: 'linear-gradient(180deg, #78BF26 0%, #47A340 100%)',
      clipPath: 'polygon(30% 0, 100% 0, 70% 100%, 0 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '120px 32px 140px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--light-green)'
    }
  }, "Plenitude Consulting \xB7 Innovation Hub"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 64,
      lineHeight: 1.04,
      fontWeight: 900,
      margin: '20px 0 18px',
      letterSpacing: '-0.02em'
    }
  }, "Regulatory change,", /*#__PURE__*/React.createElement("br", null), "delivered."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.78)',
      margin: 0,
      maxWidth: 560
    }
  }, "We help financial institutions meet their obligations \u2014 accurately, efficiently, and at scale. Built by practitioners, for practitioners."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn-accent"
  }, "Talk to us"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn-ghost-on-dark"
  }, "Explore RegTech Products")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsightList.jsx
try { (() => {
function InsightList() {
  const posts = [{
    tag: 'DORA',
    date: '14 April 2026',
    title: 'What DORA means for mid-size asset managers',
    read: '12 min read'
  }, {
    tag: 'MiFID II',
    date: '02 April 2026',
    title: 'Reviewing your transaction-reporting lineage in 2026',
    read: '9 min read'
  }, {
    tag: 'AML',
    date: '20 March 2026',
    title: 'Adverse-media screening: moving beyond keyword lists',
    read: '7 min read'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--core-green)'
    }
  }, "Regulatory Insight"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: 'var(--core-blue)',
      margin: '12px 0 0',
      letterSpacing: '-0.015em'
    }
  }, "What we're reading, writing, watching.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--core-blue)',
      textDecoration: 'none'
    }
  }, "All insight \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, posts.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.title,
    style: {
      borderTop: '2px solid var(--core-blue)',
      paddingTop: 20,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--core-blue)'
    }
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-500)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-500)'
    }
  }, p.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--fg-1)',
      margin: '14px 0 14px',
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-500)',
      fontFamily: 'var(--font-mono)'
    }
  }, p.read))))));
}
window.InsightList = InsightList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsightList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductRow.jsx
try { (() => {
function ProductRow() {
  const products = [{
    name: 'Transaction Reporting',
    regime: 'MiFID II · EMIR · SFTR',
    body: 'Validate, enrich and submit. One pipeline, every regime.'
  }, {
    name: 'AML Screening',
    regime: 'JMLSG · FATF',
    body: 'Sanctions, PEP and adverse-media screening with audit trail.'
  }, {
    name: 'DORA Register',
    regime: 'DORA · EU 2022/2554',
    body: 'Maintain your ICT third-party register and exit strategies.'
  }, {
    name: 'Horizon Scanning',
    regime: 'Cross-regime',
    body: 'Track regulatory change across the jurisdictions you operate in.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-50)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--second-dark-blue)'
    }
  }, "RegTech Products"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      color: 'var(--core-blue)',
      margin: '12px 0 0',
      letterSpacing: '-0.015em'
    }
  }, "Software built by compliance practitioners.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--core-blue)',
      textDecoration: 'none'
    }
  }, "View all products \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, products.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.name,
    className: "p-card-hover",
    style: {
      background: '#fff',
      border: '1px solid var(--ink-200)',
      borderRadius: 8,
      padding: 22,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 190
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 42,
      height: 42,
      background: 'var(--mid-blue)',
      clipPath: 'polygon(40% 0, 100% 0, 100% 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, p.regime), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--fg-1)',
      margin: '8px 0 8px',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, p.body))))));
}
window.ProductRow = ProductRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceGrid.jsx
try { (() => {
function ServiceGrid() {
  const services = [{
    tag: 'Consulting',
    title: 'Regulatory advisory',
    body: 'Navigate FCA, PRA and EU regimes. From horizon scanning to board briefing.',
    accent: 'var(--core-blue)'
  }, {
    tag: 'Products',
    title: 'RegTech Products',
    body: 'Software for transaction reporting, AML screening, and DORA register management.',
    accent: 'var(--mid-blue)'
  }, {
    tag: 'Operations',
    title: 'Managed Service',
    body: 'An operational extension of your compliance team. Continuous, auditable, owned.',
    accent: 'var(--core-green)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--core-green)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      fontWeight: 700,
      color: 'var(--core-blue)',
      margin: '12px 0 0',
      letterSpacing: '-0.015em',
      maxWidth: 720,
      lineHeight: 1.1
    }
  }, "Three ways we shoulder regulatory load."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 56
    }
  }, services.map(s => /*#__PURE__*/React.createElement("article", {
    key: s.title,
    className: "p-card-hover",
    style: {
      border: '1px solid var(--ink-200)',
      borderRadius: 8,
      padding: 28,
      background: '#fff',
      transition: 'box-shadow 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      background: s.accent,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--fg-1)',
      margin: '8px 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, s.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-block',
      marginTop: 20,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--core-blue)',
      textDecoration: 'none'
    }
  }, "Learn more \u2192"))))));
}
window.ServiceGrid = ServiceGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceGrid.jsx", error: String((e && e.message) || e) }); }

})();
