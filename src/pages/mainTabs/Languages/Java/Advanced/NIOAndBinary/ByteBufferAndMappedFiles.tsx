import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ByteBufferAndMappedFiles = () => {
  const markdownFilePath = 'Languages/Java/Advanced/NIOAndBinary/ByteBufferAndMappedFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="ByteBuffer & Mapped Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ByteBufferAndMappedFiles;
