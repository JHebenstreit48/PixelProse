import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SmartPointers = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ModernCFeatures/SmartPointers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Smart Pointers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SmartPointers;
