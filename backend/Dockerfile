# Use latest python
FROM python:3.10

# Ensures python output is unbuffered when written out
ENV PYTHONUNBUFFERED 1

# System dependencies
RUN apt-get update && apt-get install -y netcat-traditional

# Create backend directory
RUN mkdir /backend

# Set backend directory to working directory
WORKDIR /backend

# Copy project files to /backend
COPY . /backend/
RUN chmod +x /backend/entrypoint.sh

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Open port 8000
EXPOSE 8000

ENTRYPOINT ["/backend/entrypoint.sh"]