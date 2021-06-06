#!/bin/bash
while getopts configname, env: option
do
case "${option}"
in
configname) configname=${OPTARG};;
env) env=${OPTARG};;
esac
done


kubectl create configmap ${configname} --from-env-file=${env}