import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const EnvironmentalAudio = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Audio/EnvironmentalAudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environmental Audio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentalAudio;
