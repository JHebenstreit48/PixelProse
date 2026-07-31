import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InterfacesAndGenerics = () => {
  const markdownFilePath = 'Languages/Java/Basics/OOP/InterfacesAndGenerics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interfaces & Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndGenerics;
