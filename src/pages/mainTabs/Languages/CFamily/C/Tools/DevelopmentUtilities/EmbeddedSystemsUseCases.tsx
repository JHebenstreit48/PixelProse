import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EmbeddedSystemsUseCases = () => {
  const markdownFilePath = 'Languages/CFamily/C/Tools/DevelopmentUtilities/EmbeddedSystemsUseCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Embedded Systems Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EmbeddedSystemsUseCases;
