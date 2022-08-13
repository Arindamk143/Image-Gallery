import React,{useState} from 'react'
import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react"

export default function Animals(props) {
    const [ratio, setRetio] = useState(1 / 1)
    const col = 3
    window.onload = () => {
        setRetio(3 / 2)
    }

    return (
        <div>
            <UnsplashReact
                accessKey={props.MY_ACCESS_KEY}
                Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}
                applicationName="Image Gallery"
                defaultSearch="Animals"
                photoRatio={ratio}
                columns={col}
                highlightColor="#00adf0"
            />
        </div>
    )
}
