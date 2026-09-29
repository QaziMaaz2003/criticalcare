import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { compare } from '../content/extra'
import { services, servicePath } from '../content/services'

// WordPress: template-parts/compare-table.php
export default function CompareTable() {
  const links = ['micu', 'als', 'bls'].map((slug) => services.find((s) => s.slug === slug))
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={compare.eyebrow} title={compare.title} text={compare.text} />
        <div className="compare card">
          <table>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                {compare.columns.map((c, i) => (
                  <th key={c} scope="col">
                    <Link to={servicePath(links[i])}>{c}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={compare.columns[i]} data-label={compare.columns[i]}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
