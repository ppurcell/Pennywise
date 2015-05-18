module JournalHelper

  def get_thumbnail(before_url)
    scanned_url = before_url.scan(URI.regexp)[0]
    end_split = scanned_url[6].split('.')

    new_url = scanned_url[0]+'://' + scanned_url[3] + end_split[0] + 'l.jpg';
    return new_url
  end

end
