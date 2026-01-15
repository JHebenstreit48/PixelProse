import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReflectionProbes = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Lighting/ReflectionProbes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reflection Probes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReflectionProbes;
