from django.db import models

# Create your models here.
'''
def upload_to_func(instance, filename):
    prefix = timezone.now().strftime("%Y/%m/%d")
    file_name = uuid4().hex
    extension = os.path.splitext(filename)[-1].lower() # 확장자 추출
    return "/".join(
        [prefix, file_name, extension,]
    )
'''


class Post(models.Model):
    author = models.CharField(max_length=30)    # 글쓴이
    # MEDIA_ROOT/uploads/2021/01/01 경로로 파일 업로드
    photo = models.ImageField(blank=True, upload_to='images/%Y/%m/%d/')     # 이미지 
    source = models.TextField() # 사진 출처
    body = models.TextField()   # 본문

    # admin 글 제목 표시하기 위한 함수
    def __str__(self):
        return self.author

        