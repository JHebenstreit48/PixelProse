import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
