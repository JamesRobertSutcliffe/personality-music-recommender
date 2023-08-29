#!/bin/bash
echo "host    all             all             0.0.0.0/0               trust" >>/var/lib/postgresql/data/pg_hba.conf
echo "host    all             all             ::/0                    trust" >>/var/lib/postgresql/data/pg_hba.conf
