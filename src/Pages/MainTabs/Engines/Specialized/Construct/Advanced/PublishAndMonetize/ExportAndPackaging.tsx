import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
