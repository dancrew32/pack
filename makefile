checkin:
	yarn prod && yarn tidy && yarn test && \
		git add -Ap && git commit && git push origin master
