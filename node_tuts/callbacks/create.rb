1000.times do |ite|
  File.open("file.txt", "a+") { |file| file.puts ite.to_s }
end 
