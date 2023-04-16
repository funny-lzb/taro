import LittleWhiteFrameWork from '../components/LittleWhiteFrameWork'
import ItemList from '../components/ItemList'
import data from '../data/data.json'

export default function Index() {
  return (
    <div
      style={{
        margin: '1rem',
        zIndex: '1000',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        {data.map(d => (
          <LittleWhiteFrameWork data={d.text} />
        ))}
      </div>
      <ItemList />
    </div>
  )
}
