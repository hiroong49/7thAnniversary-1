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
    author = models.CharField(blank=False, unique=True, max_length=30, verbose_name ="닉네임")    # 글쓴이 (입력 값 db 중복 체크 => 중복값 존재할 경우, 실행되지 않음)
    # MEDIA_ROOT/uploads/2021/01/01 경로로 파일 업로드
    photo = models.ImageField(blank=False, upload_to='images/%Y/%m/%d/', verbose_name ="사진")     # 이미지 등록한 연/월/일 폴더 안에 저장 
    source = models.TextField(blank=True, verbose_name ="사진 출처") # 사진 출처
    body = models.TextField(blank=False, verbose_name ="전할 말")   # 본문

    # admin 글 제목 표시하기 위한 함수
    def __str__(self):
        return self.author

        