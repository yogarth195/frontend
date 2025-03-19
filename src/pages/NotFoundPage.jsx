export const NotFoundPage = () => {
    return <div>
        <div className="text-6xl flex flex-col justify-center">
            <div className="flex justify-center">404</div>
            <div className="flex justify-center">Not Found</div>
        </div>
        <div className="text-xl p-2 justify-end pt-10">
            <div>Check other links Instead</div>
            <ul>
                <li><a href="/wedding">Wedding Photograph</a></li>
                <li><a href="/prewedding">Pre Wedding Photoshoots</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
}