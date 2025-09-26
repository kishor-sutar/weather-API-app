import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
	const INIT_URL = 
		"https://media.istockphoto.com/id/1340348680/photo/image-of-sunlight-breaking-through-clouds-over-cityscape-view-of-new-delhi-uttar-pradesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=zImAERmI3hm61tVHFb5h_a6hynPxSjguvK_bZ4nq6zk="

	return(
		<div className="InfoBox">
		
			<div className = "cardContainer">
			<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={INIT_URL}
				title="green iguana"
			/>
		<CardContent>
			  <Typography gutterBottom variant="h5" component="div">
				{info.city}
			  </Typography>
			  <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
				<p>Temperature = {info.temp}&deg;C</p>
				<p>Max Temp = {info.tempMax}&deg;C</p>
				<p>Min Temp = {info.tempMin}&deg;C</p>
				<p>Humidity = {info.humidity}</p>
				<p>The weather feels like {info.feelslike}&deg;C</p>
			  </Typography>
		    </CardContent>
		  </Card>
		  </div>
		</div>
		)
}
