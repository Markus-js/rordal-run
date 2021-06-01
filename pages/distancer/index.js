import TwoColumnTextTemplate from '../../components/ui/twoColumnTextTemplate/TwoColumnTextTemplate'
import Link from 'next/link'

export default function Distancer() {
    return (
        <div>
            <h1>den lange</h1>
            <TwoColumnTextTemplate />
            <button className='btn'>
            <Link href="/">tilmeld</Link>
          </button>
        </div>
    )
}
