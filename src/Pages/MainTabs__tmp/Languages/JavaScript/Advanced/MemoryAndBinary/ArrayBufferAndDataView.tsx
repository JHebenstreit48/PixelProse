import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ArrayBufferAndDataView = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/MemoryAndBinary/ArrayBufferAndDataView';

  return (
    <>
      <PageLayout>
        <PageTitle title="ArrayBuffer & DataView" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArrayBufferAndDataView;
