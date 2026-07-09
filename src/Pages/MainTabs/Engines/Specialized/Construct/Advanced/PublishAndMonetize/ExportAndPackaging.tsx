import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExportAndPackaging = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PublishAndMonetize/ExportAndPackaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Export & Packaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportAndPackaging;
