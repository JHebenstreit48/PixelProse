import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvironmentalAudio = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Audio/EnvironmentalAudio';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Environmental Audio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentalAudio;
