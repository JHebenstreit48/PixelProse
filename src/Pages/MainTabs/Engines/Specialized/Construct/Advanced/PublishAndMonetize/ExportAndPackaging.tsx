import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExportAndPackaging = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PublishAndMonetize/ExportAndPackaging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Export & Packaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportAndPackaging;
