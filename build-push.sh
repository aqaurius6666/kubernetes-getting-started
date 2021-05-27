#!/bin/bash
while getopts t: option
do
case "${option}"
in
t) TAG=${OPTARG};;
esac
done

#running
docker build . -t $TAG
docker push $TAG

