import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ByteBufferAndMappedFiles = () => {
  const markdownFilePath = 'Languages/Java/Advanced/NIOAndBinary/ByteBufferAndMappedFiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ByteBuffer & Mapped Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ByteBufferAndMappedFiles;
