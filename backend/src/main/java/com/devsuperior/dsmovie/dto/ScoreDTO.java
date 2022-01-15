package com.devsuperior.dsmovie.dto;

public class ScoreDTO {
	
	private long movieId;
	private String email;
	private double score;
	
	
	public ScoreDTO() {
		
	}


	public long getMovieId() {
		return movieId;
	}


	public void setMovieId(long movieId) {
		this.movieId = movieId;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public double getScore() {
		return score;
	}


	public void setScore(double score) {
		this.score = score;
	}
	
	

}
