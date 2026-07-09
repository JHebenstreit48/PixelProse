import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
