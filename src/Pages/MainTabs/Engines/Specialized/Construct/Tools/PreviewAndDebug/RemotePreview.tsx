import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
