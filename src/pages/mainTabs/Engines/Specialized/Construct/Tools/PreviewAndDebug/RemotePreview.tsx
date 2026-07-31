import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
