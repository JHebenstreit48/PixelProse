import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EmbeddedSystemsUseCases = () => {
  const markdownFilePath = 'Languages/CFamily/C/Tools/DevelopmentUtilities/EmbeddedSystemsUseCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Embedded Systems Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EmbeddedSystemsUseCases;
