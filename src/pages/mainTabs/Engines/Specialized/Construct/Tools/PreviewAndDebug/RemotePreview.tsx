import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RemotePreview = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Tools/PreviewAndDebug/RemotePreview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Remote Preview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RemotePreview;
